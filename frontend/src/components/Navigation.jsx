import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo_dark.svg";

export default function Navigation() {
	const type = window.localStorage.getItem("type");
	const name = window.localStorage.getItem("name");

	return (
		<>
			<Navbar expand="sm" collapseOnSelect>
				<Container fluid>
					<Navbar.Brand href={"#/home"}>
						<img
							alt="Logo"
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>
						Greenlease
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav activeKey={useLocation().pathname} className="me-auto">
							<Nav.Link eventKey={"/home"} href={"#/home"}>
								Home
							</Nav.Link>
							<Nav.Link eventKey={"/rent"} href={"#/rent"}>
								Rent
							</Nav.Link>
							<Nav.Link eventKey={"/payments"} href={"#/payments"}>
								Payments
							</Nav.Link>
							<Nav.Link eventKey={"/listings"} href={"#/listings"}>
								Listings
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse >
						<Navbar.Text>
							Signed in as: <a href="#/">{name}</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import logo from "../assets/logo_dark.svg";

function Navigation() {
	const type = window.localStorage.getItem("type");
	const name = window.localStorage.getItem("name");

	return (
		<>
			<Navbar expand="sm" collapseOnSelect>
				<Container fluid>
					<Navbar.Brand href="#/landlord/home">
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
						<Nav className="me-auto">
							<Nav.Link href={"#/" + type + "/home"}>Home</Nav.Link>
							<Nav.Link href={"#/" + type + "/rent"}>Rent</Nav.Link>
							<Nav.Link href={"#/" + type + "/payments"}>Payments</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							Signed in as: <a href="/">{name}</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default Navigation;

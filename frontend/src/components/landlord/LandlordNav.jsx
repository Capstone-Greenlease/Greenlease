import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";

function LandlordNav() {
	return (
		<>
			<Navbar expand="sm">
				<Container fluid>
					<Navbar.Brand href="#/landlord/home">
						<img
							alt="Logo"
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						Greenlease
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#/landlord/home">Home</Nav.Link>
							<Nav.Link href="#/landlord/rent">Rent</Nav.Link>
							<Nav.Link href="#/landlord/payments">Payments</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Outlet />
		</>
	);
}

export default LandlordNav;

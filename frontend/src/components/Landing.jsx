import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import logo from "../assets/logo.svg";
import Login from "./authentication/Login";
import Register from "./authentication/Register";

function Landing() {
	return (
		<div className="landing-page">
			<Container>
				<Row>
					<Col xs={12}>
						<img src={logo} alt="Greenlease-Logo" />
					</Col>
					<Col xs={12}>
						<h1>Greenlease</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={5}>
						<h2>Login</h2>
						<Login />
					</Col>
					<Col xs={12} md={2}>
						<div className="divider"></div>
					</Col>
					<Col xs={12} md={5}>
						<h2>Register</h2>
						<Register />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Landing;

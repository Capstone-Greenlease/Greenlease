import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import logo from "../assets/logo_dark.svg";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import FieldsError from "./notifications/FieldsError";

function Landing() {
	// Error handlers
	const [fieldErrorShow, setFieldErrorShow] = useState(false);

	// Clear user details on render
	useEffect(() => {
		window.localStorage.removeItem("email");
		window.localStorage.removeItem("password");
	}, []);

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
						<Login setFieldErrorShow={setFieldErrorShow} />
					</Col>
					<Col xs={12} md={2}>
						<div className="divider"></div>
					</Col>
					<Col xs={12} md={5}>
						<Register setFieldErrorShow={setFieldErrorShow} />
					</Col>
				</Row>
				<FieldsError open={fieldErrorShow} setOpen={setFieldErrorShow} />
			</Container>
		</div>
	);
}

export default Landing;

import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import logo from "../assets/logo_dark.svg";
import Login from "./authentication/Login";
import Register from "./authentication/Register";

function Landing() {
	// Error modal
	const [modalShow, setModalShow] = useState(false);
	const errorModal = (
		<Modal
			show={modalShow}
			onHide={() => setModalShow(false)}
			size="lg"
			centered
		>
			<Modal.Header>
				<Modal.Title>
					<h1>Error</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h2>
					Please make sure all fields are filled out and a user type is selected
				</h2>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={() => setModalShow(false)}>Close</Button>
			</Modal.Footer>
		</Modal>
	);

	// Clear user details on render
	useEffect(() => {
		window.localStorage.clear();
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
						<Login setModalShow={setModalShow} />
					</Col>
					<Col xs={12} md={2}>
						<div className="divider"></div>
					</Col>
					<Col xs={12} md={5}>
						<Register setModalShow={setModalShow} />
					</Col>
				</Row>
				{errorModal}
			</Container>
		</div>
	);
}

export default Landing;

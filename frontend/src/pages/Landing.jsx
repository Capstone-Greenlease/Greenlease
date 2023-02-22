import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import logo from "../assets/logo_dark.svg";
import { Login, Register } from "../components/Auth";
import { EmptyFields, UserNotFound } from "../components/Modal";

function Landing() {
	// Error handlers
	const [fieldErrorShow, setFieldErrorShow] = useState(false);
	const [userErrorShow, setUserErrorShow] = useState(false);

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
						<Login
							setFieldErrorShow={setFieldErrorShow}
							setUserErrorShow={setUserErrorShow}
						/>
					</Col>
					<Col xs={12} md={2}>
						<div className="divider"></div>
					</Col>
					<Col xs={12} md={5}>
						<Register setFieldErrorShow={setFieldErrorShow} />
					</Col>
				</Row>
				<EmptyFields open={fieldErrorShow} setOpen={setFieldErrorShow} />
				<UserNotFound open={userErrorShow} setOpen={setUserErrorShow} />
			</Container>
		</div>
	);
}

export default Landing;

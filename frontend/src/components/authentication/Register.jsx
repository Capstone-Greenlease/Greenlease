import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Form>
			<Row>
				<Col xs={12} sm={6}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Phone</Form.Label>
						<Form.Control type="tel" />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={6}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" />
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" />
					</Form.Group>
				</Col>
			</Row>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Row>
					<Col>
						<Form.Check type="radio" label="Tenant" name="type" />
					</Col>
					<Col>
						<Form.Check type="radio" label="Landlord" name="type" />
					</Col>
				</Row>
			</Form.Group>

			<Button variant="secondary" type="submit">
				Register
			</Button>
		</Form>
	);
}

export default Register;

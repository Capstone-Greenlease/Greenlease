import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" />
			</Form.Group>

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
				Login
			</Button>
		</Form>
	);
}

export default Login;

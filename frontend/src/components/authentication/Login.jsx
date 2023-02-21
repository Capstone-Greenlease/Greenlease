import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Login({ setFieldErrorShow }) {
	// React-router navigation object
	const navigate = useNavigate();

	// User attributes
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [type, setType] = useState("");

	// Handle user login procedure
	const handleLogin = () => {
		if (email === "" || password == "" || type == "") {
			setFieldErrorShow(true);
			return;
		}

		navigate("/" + window.localStorage.getItem("type") + "/home");
	};

	useEffect(() => {
		window.localStorage.setItem("email", email);
		window.localStorage.setItem("password", password);
		window.localStorage.setItem("type", type);
	}, [email, password, type]);

	return (
		<Form>
			<h2>Login</h2>
			<Form.Group className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3">
				<Row>
					<Col>
						<Form.Check
							type="radio"
							label="Tenant"
							name="type"
							onClick={() => setType("tenant")}
						/>
					</Col>
					<Col>
						<Form.Check
							type="radio"
							label="Landlord"
							name="type"
							onClick={() => setType("landlord")}
						/>
					</Col>
				</Row>
			</Form.Group>

			<Button variant="secondary" type="button" onClick={handleLogin}>
				Login
			</Button>
		</Form>
	);
}

export default Login;

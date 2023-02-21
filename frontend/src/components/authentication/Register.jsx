import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Register({ setFieldErrorShow }) {
	// React-router navigation object
	const navigate = useNavigate();

	// User attributes
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [type, setType] = useState("");

	// Handle user registration procedure
	const handleRegister = () => {
		if (
			email === "" ||
			password == "" ||
			type == "" ||
			name == "" ||
			phone == ""
		) {
			setFieldErrorShow(true);
			return;
		}

		navigate("/" + window.localStorage.getItem("type") + "/home");
	};

	useEffect(() => {
		window.localStorage.setItem("name", name);
		window.localStorage.setItem("phone", phone);
		window.localStorage.setItem("email", email);
		window.localStorage.setItem("password", password);
		window.localStorage.setItem("type", type);
	}, [name, phone, email, password, type]);

	return (
		<Form>
			<h2>Register</h2>
			<Row>
				<Col xs={12} sm={6}>
					<Form.Group className="mb-3">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3">
						<Form.Label>Phone</Form.Label>
						<Form.Control
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col xs={12} sm={6}>
					<Form.Group className="mb-3">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>

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

			<Button variant="secondary" type="button" onClick={handleRegister}>
				Register
			</Button>
		</Form>
	);
}

export default Register;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Register() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [url, setUrl] = useState("");

	const handleRegister = () => {
		console.log(url);
		console.log(name, phone, email, password);

		if (url === "") {
			alert("Select user type");
			return;
		}

		navigate(url);
	};

	return (
		<Form>
			<Row>
				<Col xs={12} sm={6}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicEmail">
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
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</Form.Group>
				</Col>
				<Col>
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</Form.Group>
				</Col>
			</Row>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Row>
					<Col>
						<Form.Check
							type="radio"
							label="Tenant"
							name="type"
							onClick={() => setUrl("tenant/home")}
						/>
					</Col>
					<Col>
						<Form.Check
							type="radio"
							label="Landlord"
							name="type"
							onClick={() => setUrl("landlord/home")}
						/>
					</Col>
				</Row>
			</Form.Group>

			<Button variant="secondary" type="submit" onClick={handleRegister}>
				Register
			</Button>
		</Form>
	);
}

export default Register;

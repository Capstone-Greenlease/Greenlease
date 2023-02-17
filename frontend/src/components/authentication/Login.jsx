import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [url, setUrl] = useState("");

	const handleLogin = () => {
		console.log(url);
		console.log(email, password);

		if (url === "") {
			alert("Select a user type");
			return;
		}

		navigate(url);
	};

	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Row>
					<Col>
						<Form.Check
							type="radio"
							label="Tenant"
							name="type"
							onClick={() => setUrl("/tenant/home")}
						/>
					</Col>
					<Col>
						<Form.Check
							type="radio"
							label="Landlord"
							name="type"
							onClick={() => setUrl("/landlord/home")}
						/>
					</Col>
				</Row>
			</Form.Group>

			<Button variant="secondary" type="submit" onClick={handleLogin}>
				Login
			</Button>
		</Form>
	);
}

export default Login;

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function LandlordHome() {
	// fetch
	const test = [
		{
			name: "terrace",
			location: "close",
			img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			name: "pueblo",
			location: "far",
			img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			name: "guayama",
			location: "far",
			img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	const cards = test.map((value, index) => {
		return (
			<Col key={index}>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={value.img} />
					<Card.Body>
						<Card.Title>{value.name}</Card.Title>
						<Card.Text>{value.location}</Card.Text>
						<Button variant="primary">Go somewhere</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	});

	return (
		<>
			<div>Landlord Home</div>
			<Row>{cards}</Row>
		</>
	);
}

export default LandlordHome;

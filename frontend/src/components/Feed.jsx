import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { PropertyView } from "./Modal";
import Rating from "./Rating";

export function LandlordHome() {
	// Testing w/o API

	// Landlord Rating
	const rating = 69;

	// Landlord properties
	const properties_test = [
		{
			name: "terrace",
			location: "close",
			img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			name: "pueblo",
			location: "close",
			img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
		{
			name: "miradero",
			location: "far",
			img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	const [openView, setOpenView] = useState(false);

	// Properties in cards
	const properties = properties_test.map((value, index) => {
		return (
			<Col key={index}>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={value.img} />
					<Card.Body>
						<Card.Title>{value.name}</Card.Title>
						<Card.Text>{value.location}</Card.Text>
						<Button variant="primary" onClick={() => setOpenView(true)}>
							View
						</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	});

	return (
		<div className="home-page">
			<Container fluid>
				<Row>
					<div className="rating">
						<h2>Landlord Rating</h2>
						<Rating percentage={rating} />
					</div>
				</Row>
				<Row>
					<h2>My Property</h2>
				</Row>
				<Row>{properties}</Row>
			</Container>
			<PropertyView open={openView} setOpen={setOpenView} />
		</div>
	);
}

export function LandlordRent() {
	return <div>Landlord Rent</div>;
}
export function LandlordPayments() {
	return <div>Landlord Payments</div>;
}
export function TenantHome() {
	return <div>Tenant Home</div>;
}
export function TenantRent() {
	return <div>Tenant Rent</div>;
}
export function TenantPayments() {
	return <div>Tenant Payments</div>;
}

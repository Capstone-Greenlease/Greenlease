import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { PropertyView, FilterView } from "./Modal";
import Rating from "./Rating";
import Badge from 'react-bootstrap/Badge';
import db from '../data/db.json'
import Modal from 'react-bootstrap/Modal';


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


export function LandlordListings() {

	const [openView, setOpenView] = useState(false);
	const [modalContent, setModalContent] = useState("");
	const [filterView, setfilterView] = useState(false);

	// Properties in cards
	const properties = db.properties.map((value, index) => {
		return (
			<Col key={index}>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={value.img} />
					<Card.Body>
						<Card.Title>{value.name}</Card.Title>
						<Card.Text>{value.location}</Card.Text>
						<Card.Text>Capacity: {value.capacity}</Card.Text>
						<Card.Text>Price: {value.price}</Card.Text>
						<Button variant="primary" onClick={() => {setOpenView(true); setModalContent(value.info)}}>
							View
						</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	});

	return (
		<div className="listings-page">
			<Container fluid>
				<Row>
					<h2>Listings</h2>
					<div className="float-right"> <Button variant="primary" onClick={() => setfilterView(true)}>Filter</Button></div>
					
				</Row>
				<Row xs={1} md={6} className="g-4">{properties}</Row>
			</Container>
			<InfoView open={openView} setOpen={setOpenView} />
			<FilterView open={filterView} setOpen={setfilterView} />
		</div>
	);

	function InfoView({ open, setOpen }) {
		return (
			<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
				<Modal.Header>
					<Modal.Title id="contained-modal-title-vcenter">
						{modalContent.name}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>{modalContent.address} </h4>
					<p>
						Capacity: {modalContent.capacity}
						<br></br>
						Price: {modalContent.price}						
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="secondary"
						type="button"
						onClick={() => setOpen(false)}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
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
export function TenantListings() {
	return <div>Tenant Listings</div>;
}

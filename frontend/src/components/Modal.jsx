import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import React, { useState } from 'react';
import Map from "./Map";

export function EmptyFields({ open, setOpen }) {
	return (
		<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
			<Modal.Header>
				<Modal.Title>
					<h1>Empty Fields Error</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h2>
					Please make sure all fields are filled out including whether you are a
					tenant or landlord.
				</h2>
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

export function UserNotFound({ open, setOpen }) {
	return (
		<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
			<Modal.Header>
				<Modal.Title>
					<h1>User Not Found</h1>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h2>Please make sure all you entered the correct information.</h2>
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

export function PropertyView({ open, setOpen }) {
	return (
		<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					Barrio-Pueblo Mayagüez, 00640, Puerto Rico
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>La Palma </h4>
				<p>
					Se rentan apartamentos desde $450 (1 Cuarto) a $600 (2 Cuartos). A
					pasos de la alcaldia de Mayaguez, Restaurantes, Hospitales, y a
					minutos del Colegio de Mayaguez. Incluyen Agua y Luz!
				</p>
				<Map />
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

export function InfoView({ open, setOpen, data}) {
	return (
		<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
			<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
					{data.name}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>{data.address}</h4>
				<p>	Location: {data.location} </p>
				<p> Capacity: {data.capacity} </p>
				<p> Price: {data.price} </p>
				<Map />
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

export function FilterView({ open, setOpen }) {
	const [bedroomValue, setBedroomValue] = useState('1');
	const bedrooms = [
		{ name: 'Any', value: '0' },
		{ name: '1', value: '1' },
		{ name: '2', value: '2' },
		{ name: '3', value: '3' },
		{ name: '4', value: '4' },
  	];

	const [bathroomValue, setBathroomValue] = useState('1');
	const bathrooms = [
		{ name: 'Any', value: '0' },
		{ name: '1', value: '1' },
		{ name: '2', value: '2' },
		{ name: '3', value: '3' },
		{ name: '4', value: '4' },
  	];
	return (
		<Modal show={open} onHide={() => setOpen(false)} size="lg" centered>
			<Modal.Header
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center"
				}}>
				<Modal.Title id="contained-modal-title-vcenter"> 
					Filters
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<>
				<Form.Label>Price</Form.Label>
				<Form.Range min="100" max="1000"/>
			</>
			<hr/>
			<h4>Bedrooms</h4>
			<ButtonGroup>
			{bedrooms.map((bedradio, idx) => (
				<ToggleButton
					key={idx}
					id={`bedradio-${idx}`}
					type="radio"
					name="bedrooms"
					value={bedradio.value}
					checked={bedroomValue === bedradio.value}
					onChange={(e) => setBedroomValue(e.currentTarget.value)}
				>
					{bedradio.name}
          		</ToggleButton>))}
			</ButtonGroup>
			<hr/>
			<h4>Bathrooms</h4>
			<ButtonGroup>
			{bathrooms.map((bathradio, idx) => (
				<ToggleButton
					key={idx}
					id={`bathradio-${idx}`}
					type="radio"
					name="bathrooms"
					value={bathradio.value}
					checked={bathroomValue === bathradio.value}
					onChange={(e) => setBathroomValue(e.currentTarget.value)}
				>
					{bathradio.name}
          		</ToggleButton>))}
			</ButtonGroup>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					type="button"
					onClick={() => setOpen(false)}
				>
					Search
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
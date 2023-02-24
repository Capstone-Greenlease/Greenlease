import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";
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

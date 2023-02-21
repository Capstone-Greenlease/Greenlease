import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/Modal";

function FieldsError({ open, setOpen }) {
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

export default FieldsError;

import Container from "react-bootstrap/esm/Container";
import { LandlordPayments, TenantPayments } from "../components/Feed";

function Payments() {
	const storage = window.localStorage;

	const type = storage.getItem("type");

	return (
		<div className="payments-page">
			<Container fluid>
				{type === "landlord" ? <LandlordPayments /> : <TenantPayments />}
			</Container>
		</div>
	);
}

export default Payments;

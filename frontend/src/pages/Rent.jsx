import Container from "react-bootstrap/esm/Container";
import { LandlordRent, TenantRent } from "../components/Feed";

function Rent() {
	const storage = window.localStorage;

	const type = storage.getItem("type");

	return (
		<div className="rent-page">
			<Container fluid>
				{type === "landlord" ? <LandlordRent /> : <TenantRent />}
			</Container>
		</div>
	);
}

export default Rent;

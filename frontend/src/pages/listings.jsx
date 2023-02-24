import Container from "react-bootstrap/esm/Container";
import { LandlordListings, TenantListings } from "../components/Feed";

function Listings() {
	const storage = window.localStorage;

	const type = storage.getItem("type");

	return (
		<div className="listings-page">
			<Container fluid>
				{type === "landlord" ? <LandlordListings /> : <TenantListings />}
			</Container>
		</div>
	);
}

export default Listings;
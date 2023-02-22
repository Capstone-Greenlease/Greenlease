import Container from "react-bootstrap/esm/Container";
import { LandlordHome, TenantHome } from "../components/Feed";

function Home() {
	const storage = window.localStorage;

	const type = storage.getItem("type");

	return (
		<div className="home-page">
			<Container fluid>
				{type === "landlord" ? <LandlordHome /> : <TenantHome />}
			</Container>
		</div>
	);
}

export default Home;

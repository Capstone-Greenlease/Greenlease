import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import LandlordHome from "./components/landlord/LandlordHome";
import LandlordNav from "./components/landlord/LandlordNav";
import LandlordPayments from "./components/landlord/LandlordPayments";
import LandlordRent from "./components/landlord/LandlordRent";
import TenantHome from "./components/tenant/TenantHome";
import TenantNav from "./components/tenant/TenantNav";
import TenantPayments from "./components/tenant/TenantPayments";
import TenantRent from "./components/tenant/TenantRent";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/tenant" element={<TenantNav />}>
				<Route path="home" element={<TenantHome />} />
				<Route path="rent" element={<TenantRent />} />
				<Route path="payments" element={<TenantPayments />} />
			</Route>
			<Route path="/landlord" element={<LandlordNav />}>
				<Route path="home" element={<LandlordHome />} />
				<Route path="rent" element={<LandlordRent />} />
				<Route path="payments" element={<LandlordPayments />} />
			</Route>
		</Routes>
	);
}

export default App;

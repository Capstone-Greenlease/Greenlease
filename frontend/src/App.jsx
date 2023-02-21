import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import LandlordHome from "./components/landlord/LandlordHome";
import LandlordPayments from "./components/landlord/LandlordPayments";
import LandlordRent from "./components/landlord/LandlordRent";
import Navigation from "./components/Navigation";
import TenantHome from "./components/tenant/TenantHome";
import TenantPayments from "./components/tenant/TenantPayments";
import TenantRent from "./components/tenant/TenantRent";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route element={<Navigation />}>
				<Route path="tenant/home" element={<TenantHome />} />
				<Route path="tenant/rent" element={<TenantRent />} />
				<Route path="tenant/payments" element={<TenantPayments />} />
				<Route path="landlord/home" element={<LandlordHome />} />
				<Route path="landlord/rent" element={<LandlordRent />} />
				<Route path="landlord/payments" element={<LandlordPayments />} />
			</Route>
		</Routes>
	);
}

export default App;

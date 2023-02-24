import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Listings from "./pages/Listings";
import Payments from "./pages/Payments";
import Rent from "./pages/Rent";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route element={<Navigation />}>
				<Route path="/home" element={<Home />} />
				<Route path="/rent" element={<Rent />} />
				<Route path="/payments" element={<Payments />} />
				<Route path="/listings" element={<Listings />} />
			</Route>
		</Routes>
	);
}

export default App;

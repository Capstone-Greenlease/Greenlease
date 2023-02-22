import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
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
			</Route>
		</Routes>
	);
}

export default App;

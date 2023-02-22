import { useState } from "react";

// API fetcher
const getUser = () => {
	// const api = "offical-api.com";
	const api = "../data/db.json";

	const [result, setResult] = useState(null);

	fetch(api)
		.then((res) => res.json())
		.then((data) => {
			// console.log(data);
			data.users.map((value, index) => {
				// console.log("Looking for user in", value);
				if (
					value.email === user.email &&
					value.password === user.password &&
					value.type === user.type
				) {
					console.log("User found!");
					setResult(value);
				}
			});
		});

	return result;
};

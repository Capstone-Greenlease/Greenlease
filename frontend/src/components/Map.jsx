import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

export default function Map() {
	const containerStyle = {
		width: "auto",
		height: "400px",
	};

	const center = {
		lat: 18.202297491160678,
		lng: -67.13911843684386,
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyA6yY_cU0oAtUgzmfwNNdPZSaMbKnlHhvg",
		libraries: ["geometry", "drawing"],
	});

	if (!isLoaded) return <>Loading...</>;

	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
			<MarkerF position={center} />
		</GoogleMap>
	);
}

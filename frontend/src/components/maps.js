import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function TenantHome() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA6yY_cU0oAtUgzmfwNNdPZSaMbKnlHhvg",
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat:18.215655520603754, lng:-67.14842061860988 }), []);

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
            <Marker position={center} />
        </GoogleMap>
    );
}



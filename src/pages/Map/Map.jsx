import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";



// Custom marker icon fix for React-Leaflet
const customIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/64/684/684908.png", // Example marker
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const Map = () => {

    const [] = useState()

    const position = [23.8103, 90.4125]; // Dhaka, Bangladesh (Example Location)

    return (
        <div className="my-4">
        <MapContainer
            center={position}
            zoom={13}
            style={{ height: "300px", width: "100%" }}
        >
            {/* Tile Layer (Map Background) */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            >
            </TileLayer>

            <Marker position={position} icon={customIcon}>
                <Popup>Welcome to Stayza , Bangladesh</Popup>
            </Marker>
        </MapContainer>
        </div>
    );
}

export default Map;
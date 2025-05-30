import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const places = [
  {
    name: "Мемориал Славы",
    description: "Посвящён памяти павших воинов.",
    position: [54.5988, 53.6947],
  },
  {
    name: "Городской парк",
    description: "Место отдыха и прогулок.",
    position: [54.6003, 53.6942],
  },
  {
    name: "Центральная мечеть",
    description: "Одна из главных мечетей города.",
    position: [54.6015, 53.6965],
  },
];

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <MapContainer center={[54.6, 53.694]} zoom={14} style={{ height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {places.map((place, index) => (
          <Marker key={index} position={place.position}>
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;

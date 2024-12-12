import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

function AddMarkerOnclick({ setMarkerPosition }) {
  useMapEvent({
    click(e) {
      setMarkerPosition(e.latlng); // تنظیم مختصات
    },
  });
  return null; // این تابع چیزی را رندر نمی‌کند
}

function MapComponent() {
  const [markerPosition, setMarkerPosition] = useState(null);

  return (
    <MapContainer
      center={[35.6892, 51.389]} // مرکز نقشه (تهران)
      zoom={13}
      style={{ width: "400px", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <AddMarkerOnclick setMarkerPosition={setMarkerPosition} />
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>
            مختصات انتخاب شده:{" "}
            {`(${markerPosition.lat}, ${markerPosition.lng})`}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default MapComponent;

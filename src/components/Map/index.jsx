import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const MapWrapper = styled.div`
  height: 350px;
  width: 100%;
  margin-top: 1rem;
`;

const Map = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapWrapper>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;

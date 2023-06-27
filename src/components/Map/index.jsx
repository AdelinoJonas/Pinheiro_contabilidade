import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const MapWrapper = styled.div`
  height: 350px;
  width: 100%;
  margin-top: 1rem;
`;

const Map = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  return (
    <MapWrapper>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position} />
      </MapContainer>
    </MapWrapper>
  );
};

export default Map;

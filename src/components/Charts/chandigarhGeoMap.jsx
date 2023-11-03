import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';

const ChandigarhMap = () => {
  const position = [30.7333, 76.7794]; // Latitude and Longitude of Chandigarh
  const crimeData = [
    { position: [30.7365, 76.7888], severity: 'low', description: 'Low severity crime.' },
    { position: [30.7457, 76.7661], severity: 'high', description: 'High severity crime.' }
  ];

  return (
    <MapContainer center={position} zoom={12} style={{ height: '30%', width: '30%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {crimeData.map((crime, index) => (
        <React.Fragment key={index}>
          {crime.severity === 'low' && (
            <CircleMarker
              center={crime.position}
              radius={5}
              fillColor="green"
              color="green"
              fillOpacity={1}
            >
              <Popup>{crime.description}</Popup>
            </CircleMarker>
          )}
          {crime.severity === 'high' && (
            <CircleMarker
              center={crime.position}
              radius={10}
              fillColor="red"
              color="red"
              fillOpacity={1}
            >
              <Popup>{crime.description}</Popup>
            </CircleMarker>
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default ChandigarhMap;

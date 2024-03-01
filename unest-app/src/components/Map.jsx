import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import './Map.css'
import apartmentIcon from '../Assets/Apartment.png';

const MapComp = () => {
  return (
    <div>
    <MapContainer testId="map" center={[40.4157, -86.91015]} zoom={20} style={{ height: '700px', width: '100%', zIndex: "0"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.4157, -86.91015]}>
        <Popup>
          Property Name
          Property Address
          West Lafayette, IN 47906
          Distance: 1.5 miles away from Purdue University
        </Popup>
      </Marker>
    </MapContainer>
    <img src={apartmentIcon} style={{position: "relative", top: "-700px", width: "680px", height: "700px", float: "right", zIndex: "1"}} alt=""/>
    </div>
  );
};

export default MapComp;
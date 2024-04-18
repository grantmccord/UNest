import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ReactGeocode from 'react-geocode';
import './Map.css'
import apartmentIcon from '../Assets/Apartment.png';
import pinIcon from '../Assets/pin.png';
import { layerGroup } from 'leaflet';
import {useMap} from 'react-leaflet';
import { Control, DomUtil } from 'leaflet';
import L from 'leaflet';
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

export const MapComp = () => {
  const {id} = useParams();
  const [property, setProperty] = useState(null);
  const [coord, setCoord] = useState([]);

  useEffect(() => {
    viewProperty();
    console.log("Id: ", id);
  }, [id, coord]);
  
  const viewProperty = async () => {
    try {
        console.log("Id: ", id);
        const response = await axios.get(`/api/property/${id}`);
        const prop = response.data;
        console.log("name: ", prop.name);
        console.log("address: ", prop.address);
        setProperty(prop);
        //console.log("URL: ",`/geocode/${encodeURIComponent(prop.address)}`); 
        //const geoResponse = await axios.get(`/geocode/${encodeURIComponent(prop.address)}`);
        /*
        ReactGeocode.fromAddress(prop.address).then((response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log("lat: ", lat);
          console.log("lng: ", lng);
          setCoord([lat, lng]);
        });
        */
       //console.log("Response: ", geoResponse.data);
       /*
       const map = L.map('map').setView([51.505, -0.09], 13);

       // Initialize Leaflet Control Geocoder
       const geocoder = L.Control.geocoder({
         collapsed: false,
         placeholder: prop.address,
         defaultMarkGeocode: false,
       }).addTo(map);
   
       // Handle geocode events
       geocoder.on('markgeocode', function(event) {
         const { latlng } = event.geocode;
         const { lat, lng } = latlng;
         console.log('Latitude:', lat);
         console.log('Longitude:', lng);
         // Do something with lat and lng, such as setting state or calling a function
         setCoord([lat, lng]);
       });
   
       // Make sure you have a div with id 'map' in your JSX
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
       }).addTo(map);
        //console.log("lat: ", lat);
        //console.log("lng: ", lng);
        //setCoord([lat, lng]);
        */
        console.log("Property: ", property);
        console.log("Success listing click");
    }
    catch (error) {
        console.error("Error fetching listing", error);
    }
  
  };

  const customPinIcon = L.icon({
    iconUrl: pinIcon, // URL of the pin icon image
    iconSize: [30, 30], // Size of the icon (width, height)
    iconAnchor: [16, 32], // Anchor point of the icon (position where the icon's hotspot should be located relative to the marker's position)
  });

  return (
    <div>
      {property ? (
        <div>
    <MapContainer testId="map" center={/*coord*/[40.4254, -86.9082]} zoom={20} style={{ height: '700px', width: '100%', zIndex: "0"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={/*coord*/[40.4254, -86.9082]} icon={customPinIcon}>
        <Popup>
         <p>{property.name}</p>
          <p>{property.address}</p>
        </Popup>
      </Marker>
    </MapContainer>
    <img src={property.photos[0]} style={{position: "relative", top: "-700px", width: "550px", height: "700px", float: "right", zIndex: "1"}} alt=""/>
    </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default MapComp;
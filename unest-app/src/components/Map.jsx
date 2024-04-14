import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import ReactGeocode from 'react-geocode';
import './Map.css'
import apartmentIcon from '../Assets/Apartment.png';

export const MapComp = () => {
  const {id} = useParams();
  const [property, setProperty] = useState(null);
  const [coord, setCoord] = useState([]);

  useEffect(() => {
    viewProperty();
    console.log("Id: ", id);
  }, [id]);
  
  const viewProperty = async () => {
    try {
        console.log("Id: ", id);
        const response = await axios.get(`/api/property/${id}`);
        const prop = response.data;
        console.log("name: ", prop.name);
        console.log("address: ", prop.address);
        setProperty(prop); 
        /*
        ReactGeocode.fromAddress(prop.address).then((response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCoord([lat, lng]);
        });
        */
        console.log("Property: ", property);
        console.log("Success listing click");
    }
    catch (error) {
        console.error("Error fetching listing", error);
    }
  
  };

  return (
    <div>
      {property ? (
        <div>
    <MapContainer testId="map" center={/*coord.coordinates*/[40.4157, -86.91015]} zoom={20} style={{ height: '700px', width: '100%', zIndex: "0"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={/*coord.coordinates*/[40.4157, -86.91015]}>
        <Popup>
         <p>{property.name}</p>
          <p>{property.address}</p>
          Distance: 1.5 miles away from Purdue University
        </Popup>
      </Marker>
    </MapContainer>
    <img src={apartmentIcon} style={{position: "relative", top: "-700px", width: "550px", height: "700px", float: "right", zIndex: "1"}} alt=""/>
    </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default MapComp;
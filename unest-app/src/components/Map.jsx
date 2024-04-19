import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import './Map.css'
import pinIcon from '../Assets/pin.png';
import L from 'leaflet';

export const MapComp = () => {
  const {id} = useParams();
  const [property, setProperty] = useState(null);
  const [coord, setCoord] = useState(null);

  useEffect(() => {
    viewProperty();
    console.log("Id: ", id);
  }, [id]);

  useEffect(() => {
    console.log("coord: ", coord)
  }, [coord]);

  const viewProperty = async () => {
    try {
        console.log("Id: ", id);
        const response = await axios.get(`/api/property/${id}`);
        const prop = response.data;
        console.log("name: ", prop.name);
        console.log("address: ", prop.address);
        setProperty(prop);        
        console.log("Property: ", property);
        console.log("Success listing click");
        const res = await fetch(encodeURI("https://api.mapbox.com/geocoding/v5/mapbox.places/" + prop.address + ".json?access_token=pk.eyJ1IjoiZ21jY29yZDY1MDIiLCJhIjoiY2x1bHpxeDVjMTg5cTJqbzN5bGozbzgwaiJ9.-TGy73Y_CF2rZEBKGIKTJw"));
        const data = await res.json();
        setCoord(data.features[0].center);
        console.log(data.features[0].center);
        const a = data.features[0].center;
        console.log("a: ", a);
        console.log("set coord", coord);
    }
    catch (error) {
        console.error("Error fetching listing", error);
    }
  
  };

  const customPinIcon = L.icon({
    iconUrl: pinIcon, 
    iconSize: [30, 30], 
    iconAnchor: [16, 32], 
  });

  return (
    <div>
      {property && coord ? (
        <div>
    <MapContainer testId="map" center={[coord[1], coord[0]]} zoom={20} style={{ height: '700px', width: '100%', zIndex: "0"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[coord[1], coord[0]]} icon={customPinIcon}>
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
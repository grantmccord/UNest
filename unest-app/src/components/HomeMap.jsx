import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ21jY29yZDY1MDIiLCJhIjoiY2x1bHpxeDVjMTg5cTJqbzN5bGozbzgwaiJ9.-TGy73Y_CF2rZEBKGIKTJw';

export default function HomeMap({ listings }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-86.929);
    const [lat, setLat] = useState(40.424);
    const [zoom, setZoom] = useState(14);

    var el = document.createElement('div');                                       
    el.style.backgroundColor = '#FF0000';              
    el.style.width = '50px';                                                      
    el.style.height = '50px';
    el.style.borderRadius = '50%';
    el.style.opacity = 1;  

    const addresses = listings.map((listing) => listing.address);

    // ONLY WORKS AS LONG AS THE URL IS LESS THAN 256 CHARACTERS
    // only checks the first two listings in the database
    const setMarkers = async (address) => {
      try {
        // console.log(addresses.join(";"))
        const response = await fetch(encodeURI("https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiZ21jY29yZDY1MDIiLCJhIjoiY2x1bHpxeDVjMTg5cTJqbzN5bGozbzgwaiJ9.-TGy73Y_CF2rZEBKGIKTJw"));
        // console.log(response)
        const data = await response.json();
        console.log(data)
        new mapboxgl.Marker().setLngLat(data.features[0].center).addTo(map.current);
        // data.features.map((pair) => setCoords(pair.center))
        // console.log(data.features[0].center);
      } catch (error) {
        console.log("Error fetching data, ", error);
      }
      
    };
  
    useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });
  
      map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
      });
      
      // new mapboxgl.Marker(el).setLngLat([-86.929, 40.424]).addTo(map.current);
      new mapboxgl.Marker().setLngLat([-86.929, 40.424]).setPopup(new mapboxgl.Popup({ offset: 20 }).setHTML(<> HTML sample text </>)).addTo(map.current);
      addresses.forEach((address) => setMarkers(address));
    });
  
    return (
      <div className='flex justify-center'>
        {/* <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <div ref={mapContainer} className="map-container" />
      </div>
    );
}  
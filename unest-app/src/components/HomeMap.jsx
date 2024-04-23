import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ21jY29yZDY1MDIiLCJhIjoiY2x1bHpxeDVjMTg5cTJqbzN5bGozbzgwaiJ9.-TGy73Y_CF2rZEBKGIKTJw';

export default function HomeMap({ inputValue, filterValue, sliderValue, listings }) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-86.9110);
    const [lat, setLat] = useState(40.4248);
    const [zoom, setZoom] = useState(15);

    const [markers, setMarkers] = useState([]);



    // ONLY WORKS AS LONG AS THE URL IS LESS THAN 256 CHARACTERS
    const mapMarkers = async (listing) => {
      try {
        // console.log(addresses.join(";"))
        const response = await fetch(encodeURI("https://api.mapbox.com/geocoding/v5/mapbox.places/" + listing.address + ".json?access_token=pk.eyJ1IjoiZ21jY29yZDY1MDIiLCJhIjoiY2x1bHpxeDVjMTg5cTJqbzN5bGozbzgwaiJ9.-TGy73Y_CF2rZEBKGIKTJw"));
        // console.log(response)
        const data = await response.json();
        // console.log(data)

        var newmarker = new mapboxgl.Marker().setLngLat(data.features[0].center).setPopup(new mapboxgl.Popup({ offset: 20 }).setHTML(listing.name + ' $' + listing.price)).addTo(map.current);
        setMarkers(newmarker);
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

      // map.current.on('idle', () => {
      //   map.current.resize();
      // });
      
      new mapboxgl.Marker().setLngLat([-86.9110, 40.4248]).setPopup(new mapboxgl.Popup({ offset: 20 }).setHTML('Purdue Memorial Union')).addTo(map.current);

      // if (markers !== null) {
      //   for (var i = 0; i < markers.length; i++) {
      //     markers[i].remove();
      //   }
      // }
      markers.forEach((marker) => marker.remove());

      listings.filter((obj) => 
        // do processing here (for each)
        obj?.name?.toString().substring(0, inputValue.length) === inputValue || obj?.university?.toString().substring(0, inputValue.length) === inputValue
        // return what should be kept
      )
      .filter((obj) =>
        obj?.price <= sliderValue
      ).forEach((listing) => mapMarkers(listing));
    });
  
    return (
      // <div className='flex justify-center'>
      <div ref={mapContainer} className="map-container" />
      // {/* </div> */}
    );
}  
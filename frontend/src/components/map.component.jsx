import React, { useState } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl'; 
import { navigator } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = (props) => {

    const MAPBOX_TOKEN = 'pk.eyJ1IjoibmlzaGFudGJhbGFqaSIsImEiOiJja2xkOGl3cjcxc21yMndtdmxtZWpxeGRuIn0.isOPq2BjpvuzwjZMXW1yWA'; //process.env.MAPBOX_TOKEN; 
    const style = "mapbox://styles/nishantbalaji/cknbaw85i01qt17nyz50by9ep"; 

    console.log(navigator);
    const position = navigator.getPosition();
    const latitude = position.latitude;
    const longitude = position.longitude; 

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: latitude,
        longitude: longitude,
        zoom: 1.84
      });

    return(
        <div>
           <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={style}
            >
                <GeolocateControl
                // trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showUserLocation={true}
                showAccuracyCircle={false}
                />
            </ReactMapGL>
        </div>
    )
}

export default Map; 
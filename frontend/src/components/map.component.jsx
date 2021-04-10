import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'; 

const Map = () => {

    const MAPBOX_TOKEN = 'pk.eyJ1IjoibmlzaGFudGJhbGFqaSIsImEiOiJja2xkOGl3cjcxc21yMndtdmxtZWpxeGRuIn0.isOPq2BjpvuzwjZMXW1yWA'; //process.env.MAPBOX_TOKEN; 

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });

    return(
        <div>
           <ReactMapGL
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            />
        </div>
    )
}

export default Map; 
import * as React from 'react'; 
import { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../common.css'

const MarkerItem = () => {
    const drag = {
        lat: 38.6839,
        lon: -121.15234,
      };

    return (
        <div>
            <Marker
            latitude={drag.lat}
            longitude={drag.lon}
            >
                <img src={'mapicons/mapmarker.svg'} className="pin" />
            </Marker>
        </div>
    )
}

export default MarkerItem; 
import * as React from 'react'; 
import { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../common.css'

const MarkerItem = (props) => {
    const drag = {
        lat: props.latitude,
        lon: props.longitude,
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
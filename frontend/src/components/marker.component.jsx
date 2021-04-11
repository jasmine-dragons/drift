import * as React from 'react'; 
import { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../common.css'

const MarkerItem = (props) => {

    const { longitude, latitude } = props; 

    console.log("longitude: " + longitude);
    console.log("latitude: " + latitude);
    const drag = {
        lat: props.latitude,
        lon: props.longitude,
      };

      console.log(drag);

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
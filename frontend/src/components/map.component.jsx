import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl'; 
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Marker from './marker.component';

// const getLocation = async () => {
//     if ("geolocation" in navigator) {
//         console.log("Available");
//       } else {
//         console.log("Not Available");
//       }
    
//     const position = {
//         latitude: 0,
//         longitude: 0,
//     }
    
//     await navigator.geolocation.getCurrentPosition((userPosition) => {
//         // position.latitude = userPosition.coords.latitude;
//         // position.longitude = userPosition.coords.longitude;
//         position['latitude'] = 6;
//         position['longitude'] = 9;
//         console.log('inside navigator');
//         console.log(position);
//     });


//     console.log(position.latitude);
//     console.log(position.longitude);
//       return position;
// }


const Map = () => {

    const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; 
    const style = "mapbox://styles/nishantbalaji/cknbaw85i01qt17nyz50by9ep";

    const [ center, setCenter ] = useState({
        lat: 0,
        lng: 0,
    })

    const locate = () => {
        // Get browser lat and lng for current user
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
        } 
        else {
            navigator.geolocation.getCurrentPosition((position) => findLocationSuccess(position), (error) => findLocationFail(error));
        }
    };

    const findLocationFail = (error) => {
        alert(error + ' Unable to retrieve your location');
    };

    const findLocationSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setCenter({
            lat: latitude,
            lng: longitude,
        });
    };

    useEffect(
        () => {
            const name = async() => {
                await locate()
            }
            name();
        }
        );

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: center.lat,
        longitude: center.lng,
        zoom: 1.84
    });

    console.log("viewport")
    console.log(viewport); 

    return(
        <div>
           <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={style}
            
            >
                {/* <GeolocateControl
                // trackUserLocation={true}
                positionOptions={{enableHighAccuracy: true}}
                showUserLocation={true}
                showAccuracyCircle={false}
                /> */}
            </ReactMapGL>
        </div>
    )
}

export default Map; 
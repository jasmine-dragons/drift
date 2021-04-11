import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl'; 
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Marker from 'react-map-gl';
import axios from 'axios'; 

const Map = () => {

    // Tokens and styles
    const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; 
    const style = "mapbox://styles/nishantbalaji/cknbaw85i01qt17nyz50by9ep";

    // Set the center location of the map
    const [ center, setCenter ] = useState({
        lat: 0,
        lng: 0,
    })

    // Get the users current location before rendering map. Not currently used.
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
                await locate();
            }
            name();
        }
        );

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: 38.6839, //center.lat,
        longitude: -121.15234, //center.lng,
        zoom: 11.1956
    });


    // Get the marker locations to render on the map. TODO: render markers one by one for each step
    const [markers, setMarkers] = useState(null);

    const drag = {
        lat: 38.6839,
        lon: -121.15234,
      };

    const result = axios.get("/api/posts");
    setMarkers(result.data);

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
                <Marker
                latitude={drag.lat}
                longitude={drag.lon}
                >
                        <img src={'mapicons/mapmarker.svg'} className="pin" />
                </Marker>
            </ReactMapGL>
        </div>
    )
}

export default Map; 
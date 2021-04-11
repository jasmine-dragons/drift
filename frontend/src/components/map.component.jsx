import React, { useState, useEffect } from 'react';
import ReactMapGL, { GeolocateControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Marker from 'react-map-gl';
import axios from 'axios';
import MarkerItem from './marker.component';
import { tasks } from './tasks'

const Map = (props) => {

    // Tokens and styles
    const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
    const style = "mapbox://styles/nishantbalaji/cknbaw85i01qt17nyz50by9ep";

    // Set the center location of the map
    const [ center, setCenter ] = useState({
        lat: 0,
        lng: 0,
    })

    // Get the users current location before rendering map. Not currently used or working.
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
        height: "90vh",
        latitude: 38.6839, //center.lat,
        longitude: -121.15234, //center.lng,
        zoom: 11.1956
        
    });


    // Get the first marker on the map. 
    const [marker, setMarker] = useState({
        lat: tasks[0].latitude,
        lng: tasks[0].longitude,
    });

    // Render the markers one by one
    useEffect(()=> {
        setMarker({
            lat: tasks[props.index].latitude,
            lng: tasks[props.index].longitude, 
        })
    }, [props.index])

    // Check if the marker has a location
    const location = marker.lat !== null && marker.lng !== null;

    return(
        <div>
           <ReactMapGL
            {...viewport}
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={style}
            >
                {location ? <MarkerItem
                latitude={marker.lat}
                longitude={marker.lng}
                /> 
                : null
                }
                
            </ReactMapGL>
        </div>
    )
}

export default Map;

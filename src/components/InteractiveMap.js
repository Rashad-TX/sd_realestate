import React, { useRef, useEffect, useState } from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Link } from "react-router-dom";
import { AllPropList } from '../helpers/AllPropList'


const InteractiveMap = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-117.2470);
    const [lat] = useState(32.7495);
    const [zoom] = useState(12);
    const [API_KEY] = useState('TCXuHmomrZniR3kc3VAF');


    useEffect(() => {
        if (map.current) return; //stops map from intializing more than once
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

        AllPropList.forEach(mark => {
            new maplibregl.Marker({ color: "#FF0000" })
                .setLngLat([mark.latitude, mark.longitude])
                .setPopup(new maplibregl.Popup()
                    .setHTML(`
                        <span>
                            <img height="150" src="${mark.mainimg}" />
                            <h2>${mark.street}</h2>
                            <h3>Price: ${mark.price}</h3>
                            <a href="/all/${mark.id}">More details</a>
                        </span>
                    `)
                )
                .addTo(map.current);
        })
    });







    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />





        </div>


    )
}

export default InteractiveMap;
import React,{ useRef, useEffect, useState } from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';


const InteractiveMap =() =>{

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(-117.1661);
    const [lat] = useState(32.715736);
    const [zoom] = useState(14);
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
    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.240158,32.740570])
            .addTo(map.current);
  
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.240155,32.740565])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([-117.251280,32.731790])
                  .addTo(map.current);
                  new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([ -117.267040,32.827470])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.249069,32.791569])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.171134,32.944874])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.261311,32.85110])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.272158,32.814955])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.25755,32.93923])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.264058,32.808164])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.193040,32.971130])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.253075,32.725841])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.191414,32.969125])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.012866,32.933393])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.259996,32.812545])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.225785,32.8098])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.263819,32.807414])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.24919,32.832584])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.246290,32.882380])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.273108,32.816263])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([-117.269861,32.826085])
            .addTo(map.current);
            new maplibregl.Marker({color: "#FF0000"})
            .setLngLat([-117.178123,32.94069])
                  .addTo(map.current);
                  new maplibregl.Marker({color: "#FF0000"})
                  .setLngLat([-117.8038398,33.6744907])
                        .addTo(map.current);
    });


    return(
        <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    )
}

export default InteractiveMap;
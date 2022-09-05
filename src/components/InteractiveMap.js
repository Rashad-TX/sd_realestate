import React  from "react";
import Map, { NavigationControl } from "react-map-gl";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';


// import { AllPropList } from '../helpers/AllPropList'

const api_key = process.env.REACT_APP_API_KEY;

const InteractiveMap = () => {

    // const mapContainer = useRef(null);
    // const map = useRef(null);
    // const [lng] = useState(-117.2470);
    // const [lat] = useState(32.7495);
    // const [zoom] = useState(12);



    // useEffect(() => {
    //     console.log(map.current, "I came from useEffect")

    //     if (map.current) return; //stops map from intializing more than once
    //     console.log(map.current, "I came from useEffect2")
    //     map.current = new maplibregl.Map({
    //         container: mapContainer.current,
    //         style: `https://api.maptiler.com/maps/streets/style.json?key=${api_key}`,
    //         center: [lng, lat],
    //         zoom: zoom

    //     });
    //     console.log(map.current, "I came from useEffect3", mapContainer.current)
    //     map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    //     console.log(map.current, "I came from useEffect4")
    //     AllPropList.forEach(mark => {
    //         new maplibregl.Marker({ color: "#FF0000" })
    //             .setLngLat([mark.latitude, mark.longitude])
    //             .setPopup(new maplibregl.Popup()
    //                 .setHTML(`
    //                     <span>
    //                         <img height="150" src="${mark.mainimg}" />
    //                         <h5 className="marker-st">${mark.street}</h4>
    //                         <h6 className="marker-st">${mark.beds} Beds</h4>
    //                         <h6 className="marker-st">${mark.baths} baths</h4>
    //                         <h6 className="marker-st">${mark.sqft} SqFt</h4>
    //                         <h5 className="marker-price">Price: ${mark.price}</h5>
    //                         <a href="/all/${mark.id}">More details</a>
    //                     </span>
    //                 `)
    //             )
    //             .addTo(map.current);
    //     })
    // });







    return (
        <div id="imap" className="map-wrap">
            {/* <div ref={mapContainer} className="map" /> */}
            <Map mapLib={maplibregl}
                initialViewState={{
                    longitude: 16.62662018,
                    latitude: 49.2125578,
                    zoom: 4
                }}
                mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${api_key}`}
                style={{ width: "100%", height: "calc(100vh - 70px)" }}
            >
                <NavigationControl postion="top-left" />
            </Map>




        </div>


    )
}

export default InteractiveMap;
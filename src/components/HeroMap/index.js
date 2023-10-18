import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, useMapEvent, useMapEvents } from "react-leaflet";
import {
  GEOAPIFY_MAP_URL,
  MAP_BASE_URL,
  MAP_ICON_URL,
  MAP_RETINA_URL,
  MapStyles,
  tileLayerOptions,
} from "@/utils/constants";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { Icon } from "@/utils/Icons";
import { debounce } from "@/utils/helper";

function SetViewOnClick() {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: animateRef.current || false,
    })
  })
  return null
}

function HeroMap({ longitude, latitude }) {
  const [position, setPosition] = useState([latitude, longitude ]); 
  console.log(position)
  const markerIcon = L.icon({
    iconUrl: `${MAP_ICON_URL}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
    iconSize: [25, 41],
  });

  const isRetina = L.Browser.retina;
  const baseUrl = `${MAP_BASE_URL}?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;
  const retinaUrl = `${MAP_RETINA_URL}?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;

  const titleLayer = L.tileLayer(
    isRetina ? retinaUrl : baseUrl,
    tileLayerOptions
  );
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const debouncedFetchGeocodingSuggestions = debounce((inputText) => {
    setLoading(true);
    const apiUrl = `${GEOAPIFY_MAP_URL}${inputText}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;
  
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.data.features) {
          const extractedProperties = response.data.features.map((feature) => {
            return feature.properties;
          });
          setSuggestions(extractedProperties);
        } else {
          setSuggestions([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching suggestions", error);
        setSuggestions([]);
        setLoading(false);
      });
  }, 1000);
  
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);
  
    if (inputText) {
      debouncedFetchGeocodingSuggestions(inputText); 
    } else {
      setSuggestions([]);
    }
    setShowSuggestions(!!inputText);
  };
  
  useEffect(()=>{
    setPosition([latitude,longitude])
  },[latitude,longitude])
  return (
    <React.Fragment>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full  border-0">
            <div className="relative z-0 w-full h-96 overflow-hidden">
              <MapContainer            
                zoom={5}
                center={position} 
                scrollWheelZoom={false}
                attribution={false}
                attributionControl={false}
                style={MapStyles}
                layers={[titleLayer]}
              >
                <SetViewOnClick/>
                <Marker position={position} icon={markerIcon} key="marker">
                <Popup>You are Here</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative -mt-[25px] mx-auto">
        <div className="subscribe-form z-1 mx-3">
          <form className="relative mx-auto sm:max-w-lg">
            {Icon.SearchIcon}
            <input
              type="text"
              id="autocomplete"
              name="name"
              className="rounded-md bg-white dark:bg-slate-50 shadow dark:shadow-gray-300 ps-12 text-sm"
              placeholder="City, Address, Zip"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn bg-primary-color hover:bg-opacity-75 text-white rounded-md text-sm font-medium"
            >
              Search
            </button>
            {showSuggestions && (
              <div className="absolute w-full bg-white border border-gray-300 shadow-md mt-2 max-h-96 overflow-y-auto z-10 rounded-md">
                {loading ? ( 
                  <div className="text-center py-4">
                    Fetching Data...
                  </div>
                ) : suggestions.length > 0 ? (
                  suggestions.map((suggestion) => (
                    <div
                      key={suggestion.place_id}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setPosition([suggestion.lat, suggestion.lon]);
                        setShowSuggestions(false);
                      }}
                    >
                      <div className="mr-2 w-10">{Icon.MapPin}</div>
                      <span className="text-sm font-medium">
                        {suggestion.formatted}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-base text-gray-500 text-center">
                    No search results found
                  </div>
                )}
              </div>
            )}
            
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeroMap;

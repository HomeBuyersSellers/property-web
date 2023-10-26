import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Icon } from "@/utils/Icons";
import { useDebounce } from "@/utils/helper";
import dynamic from "next/dynamic";

import { GEOAPIFY_MAP_URL, MapStyles } from "@/utils/constants";
const DynamicMap = dynamic(() => import('../MapComponent'), {
  ssr: false,
})

function HeroMap({ longitude, latitude }) {
  const [position, setPosition] = useState(() => [latitude, longitude]);
  // current marker
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [map, setMap] = useState(null);
  // suggestion markers
  const [suggestionMarkers, setSuggestionMarkers] = useState([]);
  const [suggestionLocations, setSuggestionLocations] = useState([]);
  console.log(MapStyles,"MapStyles")
  const debouncedFetchGeocodingSuggestions = useDebounce((inputText) => {
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

  console.log("Suggestions On Search:", suggestions)

  const handleInputChange = (e) => {
    const inputText = e.target.value;
   
    setSearchText(inputText);
    setShowSuggestions(!!inputText);

     const newSuggestionMarkers = [...suggestionMarkers];
    newSuggestionMarkers.push({
      position: [suggestions.lat, suggestions.lon],
      label: suggestions.formatted,
    });
    setSuggestionMarkers(newSuggestionMarkers);

    const newSuggestionLocations = [...suggestionLocations];
    newSuggestionLocations.push(suggestions.formatted);
    setSuggestionLocations(newSuggestionLocations);

    if (inputText) {
      debouncedFetchGeocodingSuggestions(inputText);
    } else {
      setSuggestions([]);
    }
  };

  const handleMapMove = (map) => {};

  const handleMapChange = useCallback(
    (newLatitude, newLongitude) => {
      if (map) {
        const zoom = 10;
        map.flyTo([newLatitude, newLongitude], zoom);
      }
    },
    [map]
  );

  const handleSuggestionClick = (suggestion) => {
    handleMapChange(suggestion.lat, suggestion.lon);
    setShowSuggestions(false)
  };
  useEffect(() => {
    setPosition([latitude, longitude]);
    if (map) {
        const zoom = 15;
        map.flyTo([latitude, longitude], zoom);
      map.on("move", handleMapMove);
      return () => {
        map.off("move", handleMapMove);
      };
    }
  }, [map, latitude, longitude]);

  return (
    <React.Fragment>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full  border-0">
            <div className="relative z-0 w-full h-96 overflow-hidden">
              <DynamicMap
               position={position} 
               suggestions={suggestions}
               suggestionMarkers={suggestionMarkers} 
               mapStyles={MapStyles.heroBanner}
               mapRef={setMap}
               createdMap={setMap}
               />
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
              type="button"
              className="btn bg-primary-color hover:bg-opacity-85 text-white rounded-md text-sm font-medium"
            >
              Search
            </button>
            {showSuggestions && (
              <div className="absolute w-full bg-white border border-gray-300 shadow-md mt-2 max-h-96 overflow-y-auto z-10 rounded-md">
                {loading ? (
                  <div className="text-center py-4">Fetching Data...</div>
                ) : suggestions.length > 0 ? (
                  suggestions.map((suggestion) => (
                    <div
                      key={suggestion.place_id}
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}>
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

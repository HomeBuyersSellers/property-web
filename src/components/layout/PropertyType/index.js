"use client";
import React, { useCallback, useEffect, useState } from "react";
import MapView from "@/components/MapComponent";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import { MapStyles } from "@/utils/constants";

const PropertyType = ({propertiesData}) => {
  const { location } = useCurrentLocation();
  console.log(propertiesData,"propertiesData")
  useEffect(()=>{
      console.log(propertiesData,location, "Location")
  },[location])
//   const latitude = location.latitude || 0;
//   const longitude = location.longitude || 0;
//   const [position, setPosition] = useState([location.latitude, location.longitude]);
//   const [map, setMap] = useState(null);

//   const handleMapMove = (map) => {};

//   const handleMapChange = useCallback(
//     (newLatitude, newLongitude) => {
//         console.log(newLatitude,newLongitude,"newLongitude")
//       if (map) {
//         const zoom = 10;
//         map.flyTo([newLatitude, newLongitude], zoom);
//       }
//     },
//     [map]
//   );
//   console.log(map,"MAP")

//   useEffect(() => {
//     // setPosition([latitude, longitude]);
//     handleMapChange(location.latitude, location.longitude);
//     if (map) {
//       const zoom = 15;
//       map.flyTo([location.latitude, location.longitude], zoom);
//       map.on("move", handleMapMove);
//       return () => {
//         map.off("move", handleMapMove);
//       };
//     }
//   }, [position, map, location]);

  return (
    <>
      <div className="w-1/2 p-4">
        <div className="map-container overflow-hidden h-full w-full">
          {/* <MapView
            position={position}
            mapStyles={MapStyles && MapStyles.mapView}
            mapRef={setMap}
            createdMap={setMap}
          /> */}
        </div>
      </div>

      {/* Right side (Listing) */}
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Property Listing</h2>
        <ul>
          {/* Display your property listings here */}
          <li className="mb-2">
            Property 1
            {/* Add property details and a link to the property page */}
            {/* Example: <a href="/property/property1">Property 1 Details</a> */}
          </li>
          <li className="mb-2">
            Property 2
            {/* Add property details and a link to the property page */}
            {/* Example: <a href="/property/property2">Property 2 Details</a> */}
          </li>
          {/* Add more property listings as needed */}
        </ul>
      </div>
    </>
  );
};
export default PropertyType;

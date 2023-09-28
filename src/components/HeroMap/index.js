import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";


function HeroMap({ latitude,longitude }) {
  const [map, setMap] = useState(null);
  const [directionResponse, setDirectionResponse] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  useEffect(() => {
    if (isLoaded) {
      // The Google Maps API is loaded and available
      const center = { lat: latitude, lng: longitude };
      const bounds = new window.google.maps.LatLngBounds(center);
      const mapInstance = new window.google.maps.Map(document.getElementById("map-container"), {
        center: center,
        zoom: 15,
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      });

      setMap(mapInstance);

      // You can add your additional logic here using mapInstance
    }
  }, [isLoaded ,latitude, longitude]);

  if (loadError) {
    // Handle any error that occurred while loading the Google Maps API
    console.error("Error loading Google Maps API:", loadError);
  }

  return (
    <div id="map-container" className="h-full w-full">
      {isLoaded && map && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={{ lat: latitude, lng: longitude }}
          zoom={15}
          onLoad={map => setMap(map)}
          onUnmount={map => setMap(null)}
          options={{
            zoomControl:false,
            fullscreenControl:false,
            mapTypeControl:false,
            streetViewControl:false,
          }}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      )}
    </div>
  );
}

export default HeroMap;

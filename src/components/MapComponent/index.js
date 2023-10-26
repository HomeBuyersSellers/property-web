"use client"
import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
    MAP_BASE_URL,
    MAP_RETINA_URL,
    tileLayerOptions,
  } from "@/utils/constants";
const MapView = ({ position, suggestions, suggestionMarkers,mapStyles,createdMap,mapRef }) => {
    const markerIcon = L.icon({
        iconUrl: "/images/current-location.svg",
        iconSize: [25, 41],
      });
    // suggestion marker
      const suggestionIcon = L.icon({
        iconUrl: "/images/pin-location.svg",
        iconSize: [25, 41],
      });
    
      const isRetina = L.Browser.retina;
      const baseUrl = `${MAP_BASE_URL}?apiKey=${process.env.GEOAPIFY_API_KEY}`;
      const retinaUrl = `${MAP_RETINA_URL}?apiKey=${process.env.GEOAPIFY_API_KEY}`;
    
      const titleLayer = L.tileLayer(
        isRetina ? retinaUrl : baseUrl,
        tileLayerOptions
      );

  return useMemo(() => (
    <MapContainer
      zoom={5}
      center={position}
      scrollWheelZoom={false}
      attribution={false}
      attributionControl={false}
      style={mapStyles}
      whenCreated={createdMap}
      ref={mapRef}
      layers={[titleLayer]}

    >
      <Marker position={position} icon={markerIcon} key="marker">
        <Popup>You are Here</Popup>
      </Marker>
      {suggestions && suggestions.map((suggestionMarker, index) => (
        <Marker
          key={index}
          position={{ lat: suggestionMarker.lat, lng: suggestionMarker.lon }}
          icon={suggestionIcon}
        >
          <Popup>{suggestionMarker.formatted}</Popup>
        </Marker>
      ))}
    </MapContainer>
  ), [position, suggestions, suggestionMarkers]);

};

export default MapView;

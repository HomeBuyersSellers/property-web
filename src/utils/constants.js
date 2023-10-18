import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

export const MAP_BASE_URL='https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png';
export const MAP_RETINA_URL='https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png';
export const MAP_ICON_URL='https://api.geoapify.com/v1/icon/?type=awesome&color=%235a71bc';
export const GEOAPIFY_MAP_URL='https://api.geoapify.com/v1/geocode/autocomplete?text='

export const MapStyles = {
    width: "100%",
    height: "400px",
  };
  
export const tileLayerOptions = {
    maxZoom: 30,
    id: "osm-bright",
  };


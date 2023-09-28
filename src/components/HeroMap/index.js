import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete"; // Import GeocoderAutocomplete

function HeroMap({ longitude, latitude }) {
  useEffect(() => {
    const mapContainer = document.getElementById("map");

    if (!mapContainer || mapContainer._leaflet_id) {
      return; // Map container is already initialized
    }

    // Define map options
    const mapOptions = {
      center: [latitude, longitude],
      zoom: 12,
      zoomControl: false,
      clickable: true,
      draggable: true,
    };

    // Create the Leaflet map
    const map = L.map("map", { attributionControl: false }, mapOptions);

    // Use Leaflet's locate method to get the user's location
    map.locate({ setView: true, watch: true, maxZoom: 50 });

    // Initialize a marker for the user's location
    let marker;

    map.on("locationfound", function (ev) {
      if (!marker) {
        // Create a new marker if it doesn't exist
        marker = L.marker(ev.latlng).addTo(map);
      } else {
        // Update the marker's position if it exists
        marker.setLatLng(ev.latlng);
      }
    });

    // Retina displays require different map tiles quality
    const isRetina = L.Browser.retina;

    const baseUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;
    const retinaUrl = `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;

    // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
    L.tileLayer(isRetina ? retinaUrl : baseUrl, {
      apiKey: process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY,
      maxZoom: 20,
      id: "osm-bright",
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: `https://api.geoapify.com/v1/icon/?type=awesome&color=%232ea2ff&size=large&scaleFactor=2&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
      iconSize: [38, 56], // size of the icon
      iconAnchor: [19, 51], // point of the icon which will correspond to marker's location
      popupAnchor: [0, -60], // point from which the popup should open relative to the iconAnchor
    });

    const autocompleteInput = new GeocoderAutocomplete(
      document.getElementById("autocomplete"),
      process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY
      // geocode options
    );

    autocompleteInput.on("select", (location) => {
      // Add marker with the selected location
      if (marker) {
        marker.remove();
      }

      if (location) {
        marker = L.marker([location.properties.lat, location.properties.lon], {
          icon: markerIcon,
        }).addTo(map);

        map.panTo([location.properties.lat, location.properties.lon]);
      }
    });
  }, [longitude, latitude]);

  return (
    <div>
      {/* Add a container for the map */}
      <div id="map" className="relative z-0 h-96 w-full"></div>

      <div className="absolute inset-x-0 bottom-[-60px] z-10 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] px-6 text-black">
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-gray-700 font-medium font-lg capitalize mb-2">
            Search Location
          </h2>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <i className="ri-search-line h-5 w-5 text-primary-color"></i>
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              id="autocomplete"
              placeholder="Search for a location"
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>

      {/* Add overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
    </div>
  );
}

export default HeroMap;

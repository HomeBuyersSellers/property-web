useEffect(() => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer || map) {
      return; // Map container is already initialized
    }
    import("leaflet").then((L) => {
      import("leaflet/dist/leaflet.css");
      // Define map options
      const mapOptions = {
        center: [latitude, longitude],
        zoom: 20,
        zoomControl: false,
        clickable: true,
        draggable: true,
      };

      // Create the Leaflet map
      map = L.map("map", { attributionControl: false }, mapOptions);

      // Use Leaflet's locate method to get the user's location
      map.locate({ setView: true, watch: true, maxZoom: 30 });
      // Initialize a marker for the user's location
      let marker;
      // Retina displays require different map tiles quality
      const isRetina = L.Browser.retina;

      const baseUrl = `${MAP_BASE_URL}?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;
      const retinaUrl = `${MAP_RETINA_URL}?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`;

      // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
      L.tileLayer(isRetina ? retinaUrl : baseUrl, {
        apiKey: process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY,
        maxZoom: 50,
        id: "osm-bright",
      }).addTo(map);

      const zooMarkerPopup = L.popup().setContent("You");
      const markerIcon = L.icon({
        iconUrl: `${MAP_ICON_URL}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}`,
        iconSize: [38, 56], // size of the icon
        iconAnchor: [19, 51], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -60], // point from which the popup should open relative to the iconAnchor
      });

      const autocompleteInput = new GeocoderAutocomplete(
        document.getElementById("autocomplete"),
        process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY
        // geocode options
      );
      marker = L.marker([latitude, longitude], {
        icon: markerIcon,
      })
        .bindPopup(zooMarkerPopup)
        .addTo(map);
      autocompleteInput.on("select", (location) => {
        // Add marker with the selected location
        if (marker) {
          marker.remove();
        }

        if (location) {
          marker = L.marker(
            [location.properties.lat, location.properties.lon],
            {
              icon: markerIcon,
            }
          )
            .bindPopup(zooMarkerPopup)
            .addTo(map);

          map.panTo([location.properties.lat, location.properties.lon]);
        }
      });
    });
  }, [latitude, longitude]);
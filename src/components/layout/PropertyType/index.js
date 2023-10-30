"use client"
import React, { useCallback, useEffect, useState } from "react";
import MapView from "@/components/MapComponent";
import { MapStyles } from "@/utils/constants";
import { useSelector } from "react-redux";
import Breadcrumbs from "@/components/Breadcrumbs";
import SearchBox from "@/components/common/SearchBox";
import Button from "@/components/common/Button";
import ListView from "@/components/ListView";

const PropertyType = ({ propertiesData }) => {
  const { location } = useSelector((state) => state.currentLocation);
  const propertyTypeTitle = useSelector(
    (state) => state.pageContext.pageContext.title
  );

  const latitude = location?.latitude || 0;
  const longitude = location?.longitude || 0;
  const [position, setPosition] = useState([latitude, longitude]);
  const [map, setMap] = useState(null);

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

  useEffect(() => {
    handleMapChange(latitude, longitude);
    if (map) {
      const zoom = 15;
      map.flyTo([latitude, longitude], zoom);
      map.on("move", handleMapMove);
      return () => {
        map.off("move", handleMapMove);
      };
    }
  }, [position, map]);

  return (
    <div className="flex w-full">
      {/* Left side (MapView) */}
      <div className="xxl:w-1/2 w-full p-4 md:w-full">
        <div className="map-container overflow-hidden h-96 xxl:h-full md:h-full w-full">
          <MapView
            position={position}
            mapStyles={MapStyles && MapStyles.mapView}
            mapRef={setMap}
            createdMap={setMap}
          />
        </div>
      </div>

      {/* Right side (Listing) */}
      <div className="xxl:w-1/2 w-full p-4 md:w-full">
        <Breadcrumbs />
        <h2 className="text-3xl black-light-color font-bold mb-1">
          Search Properties
        </h2>
        <p className="gray-light-color font-medium">
          {propertiesData.length} properties Available to {propertyTypeTitle}
        </p>
        <div className="filters py-5">
          <div className="flex w-full space-x-3">
            <div className="xxl:w-4/5 w-full">
              <SearchBox />
            </div>
            <div className="xxl:w-1/5 w-60">
              <Button variant="bg-primary-color rounded-lg font-medium text-white h-full w-full">
                <i className="ri-add-line font-semibold font-poppins"></i> Add Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable list view */}
        <div className="list-view overflow-x-auto h-max-[400px] relative">
          <div style={{ overflow: "auto", maxHeight: "100%" }}>
            {propertiesData.length > 0 &&
              propertiesData.map((val, i) => (
                <ListView propertiesData={val} key={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;

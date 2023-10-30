"use client"
import React, { useEffect } from "react";
import HeroMap from "../HeroMap";
import Loader from "../Loader";
import useCurrentLocation from "@/hooks/useCurrentLocation";
import { useSelector } from "react-redux";
const HeroBanner = () => {
  const {location}= useSelector((state)=>state.currentLocation);
  useCurrentLocation();
  return (
    <section className="mb-10 relative h-96 w-full bg-slate-400">
      <div className="bg-cover bg-center bg-no-repeat h-full relative z-0">
        <HeroMap
          latitude={location && location.latitude}
          longitude={location && location.longitude}
        />
        {/*
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full max-w-[800px] px-6">
          <h2 className="mb-6 text-2xl font-semibold leading-tight tracking-tight md:text-3xl xl:text-6xl capitalize">
          Properties in UAE
          </h2>
        </div>  
      */}
      </div>
    </section>
  );
};

export default HeroBanner;

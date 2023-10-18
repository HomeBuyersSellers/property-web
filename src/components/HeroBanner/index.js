"use client"
import React, { useEffect, useState } from "react";
import HeroMap from "../HeroMap";
const HeroBanner = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Handle the position data here
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude)
          setLongitude(longitude)
        },
        (error) => {
          // Handle error cases here
          console.error("Error getting current location:", error.message);
        }
      );
    } else {
      // Geolocation not available in this browser
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);
  console.log(latitude,longitude,"COORDINATES")
  return (
    <section className="mb-10 relative h-96 w-full bg-slate-400">
      <div className="bg-cover bg-center bg-no-repeat h-full relative z-0">
        <HeroMap
          latitude={latitude}
          longitude={longitude}
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

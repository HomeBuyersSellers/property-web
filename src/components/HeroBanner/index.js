"use client"
import React, { useEffect, useState } from "react";
import HeroMap from "../HeroMap";
const HeroBanner = () => {
  const [latitude,setLatitude]=useState('')
  const [longitude,setLongitude]=useState('')

useEffect(()=>{
 navigator.geolocation.getCurrentPosition((position)=>{
  setLatitude(position.coords.latitude);
  setLongitude(position.coords.longitude);
  console.log(position.coords)
 })
  },[])
  console.log('Lg:',longitude,'Lt:',latitude)
  return (
    <section className="mb-10 relative h-96 w-full bg-slate-400">
    <div className="bg-cover bg-center bg-no-repeat h-full relative">
    <HeroMap latitude={latitude} longitude={longitude} />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full max-w-[800px] px-6">
      <h2 className="mb-12 text-5xl font-bold leading-tight tracking-tight md:text-6xl xl:text-7xl">
        Are you ready <br /><span>for an adventure</span>
      </h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Minima officia consequatur adipisci tenetur repudiandae rerum
        quos.
      </p>
      </div>
    </div>
    </section>
  );
};

export default HeroBanner;

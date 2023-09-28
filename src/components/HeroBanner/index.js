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
      <div className="bg-cover bg-center bg-no-repeat bg-hero-banner h-full">
      <HeroMap latitude={latitude} longitude={longitude}/>
      </div>
    </section>
  );
};

export default HeroBanner;

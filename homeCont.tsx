"use client";
import React from 'react'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'
import { once } from 'events';

export  default function  HomeCont () {
  useEffect(() => {
    AOS.init({ duration: 1000,once:true });
  }, []);
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center" style={{backgroundImage:"url('/b2.png')"}}>
    <div className="pl-0 md:pl-16 text-white text-center">
      <h1 className="text-6xl font-bold drop-shadow-md" data-aos ="fade-up">Welcome To Cameramania</h1>
      <p className="text-2xl mt-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, corrupti. </p>
      <button className="mt-6 px-6 py-3 bg-gray-700 hover:bg-blue-500 rounded-md font-bold">Shop Now</button>
      </div>
      </section>
  );
};
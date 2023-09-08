"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Design Moderno e responsivo",
    image: "/temporary/slider-2.png",
  },
  {
    id: 2,
    title: "Estudante de API's",
    image: "/temporary/temp3.png",
  },
  {
    id: 3,
    title: "Melhores Práticas de programação",
    image: "/temporary/front.png.png",
  },
 
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="portfolio" className="flex flex-col h-screen md:flex-row bg-slate-100">
      
        <div
          key={currentSlide}
          className="flex flex-col items-center justify-center flex-1 gap-8 font-bold bg-gradient-to-t from-slate-50 to-slate-200 text-[#5651e5] "
          
        >
          <h1 className="p-4 text-5xl text-center uppercase md:p-10 md:text-6xl xl:text-7xl">
            {data[currentSlide].title}
          </h1>
        </div>
      

      {/* IMAGE CONTAINER */}

      <div className="relative flex-1 w-full ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;

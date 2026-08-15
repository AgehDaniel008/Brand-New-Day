import React from 'react';
import heroImage from '../assets/hero_img (1).png';
import  Bulb from '../assets/Bulb.jpg'
import backGroundImage from '../assets/bgImage1.png'

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white">
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
        <img src={heroImage} alt="Hero Image" className="w-20" />
        <p className="text-xs font-medium">Trusted by the people</p>
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-23.75 max-w-5xl">
        Turning Ideas Into <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">Reality</span>
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        Creating meaningful connections and turning big ideas into interactive digital experinces
      </p>

      <div className="relative">
        <img src={Bulb} alt="" className="w-full max-w-6xl" />
        <img src={backGroundImage} alt="" className="absolute -top-40 -right-40 sm:top-100 sm:-right-70 -z-1 dark:hidden" />
      </div>
    </div>
  );
};

export default Hero;
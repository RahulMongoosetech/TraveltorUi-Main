import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Sidebar from '@/components/Sidebar';
import Slider from '@/components/Slider';
import React from 'react';
import TrailblazersSlider from '@/components/TrailblazersSlider';
import TrekscapesSlider from '@/components/TrekscapesSlider';

const HomePage = () => {
  return (
    <>
      <div className=" relative container:2xl flex flex-col items-center">
        {/* -----------------------------Sidebar Section------------------------------  */}
        <div className="absolute w-full h-auto z-50 fex justify-end items-end ">
          <div className="lg:hidden flex justify-end">
            <Sidebar />
          </div>
          {/* -----------------------------Navbar Section------------------------------  */}
          <Navbar />
          {/* -----------------------------Slider 1 ------------------------------  */}
          <div className=" w-full h-[150px] md:h-[300px] xl:h-[500px] ">
            <Slider />
          </div>
          <div className="w-full h-auto flex flex-col items-center lg:flex lg:flex-row lg:justify-end lg:gap-5 lg:my-10  ">
            <div className="  w-3/5 md:w-2/5 lg:w-1/2 flex justify-end items-center gap-5 my-5 ">
              <img
                className="w-[40px] h-[40px] lg:w-[90px] lg:h-[70px]"
                src="/images/Circle.png"
                alt="circles"
              />
              <h4 className=" text-lg font-laila font-semibold text-black lg:text-xl">
                Explore the Trekscapes
              </h4>
            </div>
            {/* -----------------------------Search section ------------------------------  */}
            <div className="w-3/4  my-2 lg:w-2/5 flex justify-end ">
              <Search placeholder="Enter name, mood or place to find trekscqapers" />
            </div>
          </div>
          {/* -----------------------------Slider 2 section ------------------------------  */}
          <div className="w-[98%] h-auto md:w-[97%] lg:w-[99%] mx-1 md:mx-3">
            <TrekscapesSlider />
          </div>
          <div className=" flex flex-row justify-center items-center my-5 lg:my-10  gap-5">
            <img
              className=" w-[40px] h-[40px] lg:w-[90px] lg:h-[70px]"
              src="/images/Circle.png"
              alt="circles"
            />
            <h4 className=" text-lg font-laila font-semibold text-black lg:text-xl">
              Meet the Trailblazers
            </h4>
          </div>
          {/* -----------------------------Slider 3 section ------------------------------  */}
          <div className="w-[98%] h-auto md:w-[99%] lg:w-full mb-20">
            <TrailblazersSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

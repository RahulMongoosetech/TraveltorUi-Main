import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../TrekstersBTN';
import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <>
      {/* --------------------------------------Navbar----------------------------------------------------  */}

      <div className="w-[98%] lg:w-full h-auto flex flex-row justify-between    ">
        <div className=" w-full h-auto  xl:w-1/2 justify-between flex items-center my-2">
          <Link to="/">
            <img
              className="w-[150px] mx-2 h-[40px] lg:w-[300px] lg:h-[70px] lg:mx-2"
              src="/images/Logo.png"
              alt="Logo"
            />
          </Link>
          <button className="text-3xl text-[#544E0A]  lg:hidden">
            <FaBars />
          </button>
        </div>

        <div className="w-full xl:w-1/2 h-auto xl:gap-[10px] hidden lg:block lg:flex lg:items-center lg:gap-[30px] lg:flex-row  xl:flex xl:justify-between ">
          <nav className="lg:w-[350px] xl:w-[400px] flex justify-between ">
            <a
              className="underline underline-offset-8 text-lg leading-9 font-laila text-black"
              href=""
            >
              Trekscape
            </a>
            <a className="text-lg leading-9 font-laila text-black" href="">
              How it Works
            </a>
            <a className="text-lg leading-9 font-laila text-black" href="">
              Community
            </a>
          </nav>
          <div className=" mx-2 lg:w-[160px] xl:w-[200px] lg:flex lg:justify-end  h-auto ">
            <Button label="Login / Signup" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

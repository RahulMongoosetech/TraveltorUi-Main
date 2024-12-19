import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import Profile from './Profile';
const Sidebar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      style={{
        width: menu === true ? '75%' : '0%',
        transition: '0.5s',
        overflow: 'hidden',
        visibility: menu === true ? 'visible' : 'hidden',
      }}
      className="absolute w-9/12 h-[46%] border border-1 shadow-6xl  z-50  bg-[#FEEFDD] className={`transition-all translate-x-0 duration-800 overflow-hidden ${menu ? 'w-1/2 visible' : 'w-0 invisible'}`} "
    >
      <div className="w-full h-auto flex flex-col ">
        <div className="w-full h-auto text-4xl flex justify-end">
          <button
            className="my-2 text-[#544E0A]"
            onClick={() => setMenu(!menu)}
          >
            <IoClose />
          </button>
        </div>
        {/* -----------------------------Profile section ------------------------------  */}
        <Profile />
        {/* -----------------------------Option ------------------------------  */}
        <div className=" flex flex-col border-t-2 border-b-2 ">
          <Link
            smooth={true}
            offset={0}
            duration={500}
            className=" p-2 mt-2 text-md text-[#4B5568] font-semibold"
          >
            Trekscape
          </Link>
          <Link
            smooth={true}
            offset={0}
            duration={500}
            className=" p-2 mt-1 text-md text-[#4B5568] font-semibold"
          >
            How it Works
          </Link>
          <Link
            smooth={true}
            offset={0}
            duration={500}
            className=" p-2 mt-1 text-md text-[#4B5568] font-semibold"
          >
            Community
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import TrekscapeBTN from '../TrekscapeButton';

const TrekscapesCards = ({ img, tittle, Trail, Treksters }) => {
  return (
    <>
      <div className=" w-full h-[99%] flex justify-center items-center">
        <div className="w-[95%] md:w-full h-auto  my-2 bg-[#FEEFDD] flex items-start flex-col border-black border-b-4">
          <img src={img} alt="" />

          <div className="w-full h-auto flex justify-center items-center md:flex md:justify-start">
            <TrekscapeBTN />
          </div>
          <h1 className="w-full h-auto text-xl lg:text-[26px]  py-2 flex items-start align-text-top justify-center  md:flex md:justify-start md:items-start text-black md:text-2xl overflow-hidden">
            {tittle}
          </h1>
          <div className="w-full h-auto gap-[2px] mt-2 lg:gap-2 flex flex-row justify-between md:my-2">
            <div className=" flex flex-row">
              <Link className="text-xl mx-1 ">
                <IoLocationOutline />
              </Link>
              <span className="text-sm leading-6 text-black font-laila">
                {Trail}
              </span>
            </div>
            <div className="flex flex-row">
              <Link className=" flex flex-row text-lg mx-1  ">
                <HiOutlineUsers />
              </Link>

              <span className="text-sm text-black leading-6 font-laila  md:mx-1 ">
                {Treksters}
              </span>
            </div>

            <div className="h-[50px] flex items-center justify-center md:place-content-end">
              <button
                type="button"
                className="text-white text-2xl mt-2 bg-[#FFA73E] font-medium rounded-full p-2 text-center inline-flex items-center"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TrekscapesCards.propTypes = {
  img: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  Trail: PropTypes.string.isRequired,
  Treksters: PropTypes.string.isRequired,
};

export default TrekscapesCards;

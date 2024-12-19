import React from 'react';
import PropTypes from 'prop-types';

const TrailblazersCards = ({ imgC, tittleC }) => {
  return (
    <>
      <div className="card relative w-[65%] md:w-[65%] lg:w-[70%] max-w-[400px] h-[300px] rounded-xl overflow-hidden  flex justify-center items-center mx-auto">
        <div className=" w-full h-[80%] object-cover block">
          <img src={imgC} alt="" />
        </div>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[75%] h-auto bg-gradient-to-r from-[#00c6ff] to-[#7d2ae8] text-white text-xl text-center rounded-lg p-2 overflow-hidden">
          {tittleC}
        </div>
      </div>
    </>
  );
};

TrailblazersCards.propTypes = {
  imgC: PropTypes.string.isRequired,
  tittleC: PropTypes.string.isRequired,
};

export default TrailblazersCards;

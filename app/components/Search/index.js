import PropTypes from 'prop-types';
import React from 'react';

const Search = ({ placeholder }) => {
  return (
    <>
      <div className="w-full md:w-[585px] h-auto flex items-center rounded-full ">
        <img
          className="absolute w-4 h-4 md:w-6 md:h-6 mx-2"
          src="/images/Search.png"
          alt=""
        />
        <input
          type="search"
          className=" w-full p-1 ps-8 text-sm md:p-3 md:ps-10 rounded-full md:text-md border-black border-2 bg-transparent"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};
Search.propTypes = { placeholder: PropTypes.string };

export default Search;

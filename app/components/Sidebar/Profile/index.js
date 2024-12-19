import React from 'react';
import { CiWallet } from 'react-icons/ci';
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <>
      <div className="w-full h-auto gap-2 shadow-lg flex flex-row items-center justify-between">
        <div className="border-2 border-green-600 rounded-full w-14 h-14 overflow-hidden mx-1 ">
          <Link smooth={true} offset={0} duration={500}>
            <img src="/images/Steph.png  " alt="" />
          </Link>
        </div>
        <div className="w-[70%]">
          <h1 className="my-1"> Rahul Malviya </h1>
          <div className=" flex flex-row justify-start items-center ">
            <CiWallet className=" text-2xl" />
            <span className="mx-2 ">12345</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

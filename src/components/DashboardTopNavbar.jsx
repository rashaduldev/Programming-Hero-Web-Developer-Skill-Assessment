"use client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";
import { LuBell } from "react-icons/lu";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DashboardTopNavbar = () => {
  const [isOptionsVisible, setOptionsVisible] = useState();
  const [ismessageOptionsVisible, setIsmessageOptionsVisible] = useState();

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };
  const toggleOptionsMessage = () => {
    setIsmessageOptionsVisible(!ismessageOptionsVisible);
  };

  const navigateTo = (page) => {
    // Implement navigation logic based on the selected option
    console.log(`Navigating to ${page}`);
    toggleOptions(); // Close the modal after navigation
    toggleOptionsMessage();
  };

  const logout = () => {
    // Implement logout logic
    console.log('Logging out');
    toggleOptions(); // Close the modal after logout
    toggleOptionsMessage();
  };
  
  return (
    <div className="py-[20px] shadow-sm pl-4 pr-10 bg-white ">
      <div className="flex items-center justify-between ">
       <Link href={'/'}>
       <div className="flex items-center gap-[12px]">
            <FaArrowLeftLong size={18}/>
            <h2 className="text-[20px] font-semibold text-main cursor-pointer">Welcome Here</h2>
        </div>
       </Link>
        {/* profile section  */}
        
        <div className="flex gap-4 items-center">
        <div>
            <Link href={'/login'}>
             <button className="bg-slate-300 p-2 rounded-lg">Login</button>
            </Link>
        </div>
          <div className="relative">
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={toggleOptions}
      >
        <Image
          src="https://i.ibb.co/HP28p9X/Cover-photo.png"
          alt="Profile Image"
          width={100}
          height={100}
          className="rounded-full h-10 w-10"
        />
        <div>
          <p className="font-bold">Johan Smith</p>
          <p>Admin</p>
        </div>
      </div>
      {isOptionsVisible && (
        <div className="absolute top-full right-0 z-10 w-56 bg-white shadow-md rounded-md mt-2">
          <Link href={'/users/profile'}>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Profile
          </button>
          </Link>
          <Link href={'/users/editprofile'}>
          <button
           onClick={toggleOptions}
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
          >
           Edit Profile
          </button>
          </Link>
          <Link href={'sign-in'}>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={toggleOptions}>
            Logout
          </button>
          </Link>
        </div>
      )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopNavbar;

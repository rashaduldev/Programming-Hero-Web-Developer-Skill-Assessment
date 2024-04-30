import React from "react";
import { FaSearch } from "react-icons/fa";

const ProtectedSearchInput = () => {
  return (
    <div className="lg:w-full md:w-[500px] w-full bg-white  rounded-lg h-[45px] flex items-center">
      <div className="hidden md:block">
        <select
          className="w-[150px] bg-gray-200 h-[45px] outline-none px-2 rounded-md font-semibold text-sm pl-5"
          name=""
          id=""
        >
          <option value="a">Co-founder</option>
          <option value="a">Advertisement</option>
          <option value="a">Investing</option>
        </select>
      </div>
      <input
        type="text"
        className="w-full h-[45px] outline-none px-5 font-normal"
        placeholder="find your next business opportunity"
      />
      <button className="h-[45px] outline-none bg-gray-300 hover:bg-gray-400 duration-300 px-6 rounded-e-lg">
        <FaSearch size={18} className="text-main " />
      </button>
    </div>
  );
};

export default ProtectedSearchInput;

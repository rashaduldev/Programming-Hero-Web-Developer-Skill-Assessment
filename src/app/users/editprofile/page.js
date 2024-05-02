/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegSquare } from "react-icons/fa";
import { FaCircleInfo } from 'react-icons/fa6';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';

const editprofile = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textAlign, setTextAlign] = useState('left');
  const [textSize, setTextSize] = useState(16);
  const [textColor, setTextColor] = useState('#000000');
  const [textValue, setTextValue] = useState('');

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleUnderlineClick = () => {
    setIsUnderline(!isUnderline);
  };

  const handleTextAlign = (alignment) => {
    setTextAlign(alignment);
  };

  const handleTextSizeChange = (event) => {
    setTextSize(event.target.value);
  };

  const handleTextColorChange = (event) => {
    setTextColor(event.target.value);
  };

  return (
    <div>
      <h1 className='text-2xl md:text-4xl lg:text-5xl mx-4 my-6 lg:m-10 font-bold'>Edit Profile</h1>
      {/* Add your profile editing components or content here */}
      <div className='m-4 lg:m-10 flex flex-col lg:flex-row gap-4'>
           <div className='lg:w-[70%] '>
                <div className='bg-white p-5 rounded-md'>
                <div className='flex gap-5 items-center'>
                        <div className="bg-[#B5E4CA] w-3 h-8 rounded-lg"> 
                        </div>
                        <div>
                            <p className="font-bold text-lg">Profile information</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-8 m-10'>
                      <p>    <Image
                src="https://i.ibb.co/HP28p9X/Cover-photo.png"
                alt="Profile Image"
                width={100}
                height={100}
                className="rounded-full h-32 w-32 lg:h-20 lg:w-20"
                />  </p>
                      <div className=''>
                      <button className="w-[200px] relative cursor-pointer py-2 bg-[#2A85FF] text-white rounded-lg">
                        +Upload new picture
                        <input type="file" className="w-full cursor-pointer z-0 absolute top-0 left-0 h-full opacity-0"/>
                      </button>
                      </div>
                      <p>
                        <button className="btn">Remove</button>
                      </p>
                    </div>
                    <form className='mt-10 lg:mx-5'>
                    <label className="form-control">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Display name</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                    <label className="form-control">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Nick  name</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                    <label className="form-control">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Short Bio</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                  <div className='w-full flex gap-3'>
                  <label className="form-control w-[50%]">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Gender</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                    <label className="form-control w-[50%]">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Contact number</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                  </div>
                  <label className="form-control">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Email</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                    <label className="form-control">
                      <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Location</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full bg-[#F4F4F4] text-black mt-3" />
                      <div className="label"></div>
                    </label>
                    <section className="">
      <div className="">
                     <div className="flex items-center gap-3">
                        <span className="label-text text-lg text-[#33383F] font-bold">Bio</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
        <div style={{border:'2px solid #E6E7E8'}} className="rounded-lg">
          <div className="flex flex-col lg:flex-row">
            {/* Other buttons and inputs remain the same */}
            <div  className="text-black flex gap-7 m-3">
              <div
                id="textBold"
                className={`text-3xl cursor-pointer ${isBold ? 'font-bold' : ''}`}
                onClick={handleBoldClick}
              >
                B
              </div>
              <div
                id="textItalic"
                className={`text-3xl cursor-pointer ${isItalic ? 'italic' : ''}`}
                onClick={handleItalicClick}
              >
                I
              </div>
              <div
                id="textUnderline"
                className={`text-3xl cursor-pointer ${isUnderline ? 'underline' : ''}`}
                onClick={handleUnderlineClick}
              >
                U
              </div>
            </div>
            {/* Other sections remain the same */}
          </div>
          <textarea
            id="textArea"
            style={{
              fontWeight: isBold ? 'bold' : 'normal',
              fontStyle: isItalic ? 'italic' : 'normal',
              textDecoration: isUnderline ? 'underline' : 'none',
              textAlign: textAlign,
              fontSize: `${textSize}px`,
              color: textColor,
            }}
            className="mt-4 w-full rounded bg-[#F4F4F4]"
            name=""
            rows="10"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          ></textarea>
        </div>
      </div>
    </section>
              <div>
                     <div className="flex items-center gap-3 mt-7 mb-4">
                        <span className="label-text text-lg text-[#33383F] font-bold">Cover images</span>
                        <span className="label-text text-lg text-[#33383F] font-bold"><FaCircleInfo /></span>
                      </div>
                      <div>
                      <button className="w-full h-60 relative cursor-pointer py-2 bg-[#F4F4F4] text-black ">
             <p className='bg-white lg:w-60 mx-5 md:mx-28 lg:mx-auto p-5 rounded-lg'>Click or drop image</p>
              <input type="file" className="w-full cursor-pointer z-0  absolute top-0 left-0 h-full opacity-0"/>
            </button>
                      </div>
              </div>

                    </form>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-between bg-white p-5 rounded-md mt-5'>
                  <div className='flex gap-5 items-center'>
                            <div className='flex items-center'>
                            <p className=" lg:text-2xl"><MdOutlineKeyboardDoubleArrowRight /></p>
                            <p className=" lg:text-lg">Last saved</p>
                            </div>
                            <p className="font-bold lg:text-lg">Oct 4, 2021 - 23:32</p>
                    </div>
                    <button className="btn bg-[#032D2C] hover:bg-[#032d2cef] text-white mt-2 lg:mt-0">Save info</button>
                  </div>
           </div>
            <div className='lg:w-[30%]'>
         <div className='bg-white p-5 rounded-md h-auto'>
         <div className='flex items-center justify-between'>
                  <div className='flex gap-5 items-center'>
                        <div className="bg-[#B1E5FC] w-3 h-8 rounded-lg"> 
                        </div>
                            <p className="font-bold text-lg">Preview</p>
                    </div>
                    <p className='text-2xl'> <FaRegSquare /></p>
                  </div>
                    <div>
                      <p className='bg-[#F9E3FB] text-center  rounded-lg cursor-pointer p-16 my-8'>Show the Uploaded <br/> Cover photo  here</p>
                      <Image
                src="https://i.ibb.co/HP28p9X/Cover-photo.png"
                alt="Profile Image"
                width={100}
                height={100}
                className="rounded-full h-20 w-20"
                />
                <p className='mt-5 font-bold'>Display name here</p>
                    </div>
         </div>
            </div>
      </div>
    </div>
  );
};

export default editprofile;
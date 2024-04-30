
import SignUpForm from "@/app/signup/page";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] flex justify-center">
      <div className="container">
        <div className=" text-center w-full  xl:mb-[110px] lg:mb-[90px] md:mb-[60px] mb-10">
          <h2 className="xl:text-[40px] lg:text-[36px] md:text-[28px] text-[22px] text-main font-bold lg:mb-[18px] mb-4 capitalize">
            Start Your Journey!
          </h2>
          <p className="text-[#032D2C] lg:text-[18px] md:text-base text-sm font-normal">
            Join Us and Ignite Your Success Story Today!
          </p>
        </div>

        <>
          <SignUpForm />
        </>
      </div>
    </div>
  );
};

export default SignUpPage;

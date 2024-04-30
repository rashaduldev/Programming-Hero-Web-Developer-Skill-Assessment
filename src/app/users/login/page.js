import SignInForm from "@/app/login/page";



const SignInPage = () => {
  return (
    <>
      <div className="py-[40px] md:py-[50px] lg:py-[95px] xl:py-[110px] flex justify-center">
        <div className="container">
          <div className=" text-center w-full  xl:mb-[110px] lg:mb-[90px] md:mb-[60px] mb-10">
            <h2 className="xl:text-[40px] lg:text-[36px] md:text-[28px] text-[22px] text-main font-bold lg:mb-[18px] mb-4 capitalize">
              Welcome Back
            </h2>
            <p className="text-[#032D2C] lg:text-[18px] md:text-base text-sm font-normal">
              Welcome back! Please enter your details.
            </p>
          </div>
          <>
            <SignInForm />
          </>
        </div>
      </div>
    </>
  );
};

export default SignInPage;

"use client";
import Image from "next/image";
import Link from "next/link";
import { Form, Button, Input, message } from "antd";

const SignInForm = () => {
  const onFinish=()=>{
    message.success('login Successfully');

    setTimeout(() => {
      window.location.href = '/users/dashboard';
    }, 1000);
    
  }
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg p-10  lg:max-w-4xl xl:mt-[110px] lg:mt-[90px] md:mt-[60px] mt-10">
      {/* <div className="hidden bg-cover lg:block lg:w-1/2 signup-bg"></div> */}
      <div className="hidden bg-cover lg:block lg:w-1/2">
      <Image
          src="https://i.ibb.co/6yxMH7h/login.png"
          alt="Profile Image"
          width={700}
          height={300}
          className="h-full w-full p-6"
        />
      </div>
      {/*  */}
      <div className="App w-full ">
      <header className="App-header">
        <Form
         className="w-full"
         autoComplete="off"
         labelCol={{ span: 10 }}
         wrapperCol={{ span: 14 }}
         onFinish={onFinish} // Set the onFinish event handler
         onFinishFailed={(error) => {
           console.log({ error });
         }}
        >
          <Form.Item
            name="email"
            label="Email"
            className="w-full mx-auto justify-center flex items-center mt-10"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input className="py-[10px] px-[20px] w-[300px] rounded-md" placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            className="w-full mx-auto justify-center flex items-center"
            rules={[
              {
                required: true,
              },
            ]}
            hasFeedback
          >
            <Input.Password className="py-[10px] px-[20px] w-[300px] ml-1 lg:ml-0 rounded-md" placeholder="Type your password" />
          </Form.Item>
          
        <div className="text-end my-5">
        <Link href="#" className="text-sm text-red-500 cursor-pointer">
              Forgot Password?
            </Link>
        </div>

          <Form.Item className="lg:ml-64 mx-5" wrapperCol={{ span: 24 }}>
            <Button  block type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
        
        <div className=" mt-5 lg:mt-10">
          <p className="text-sm text-gray-500 text-center flex gap-3 justify-center">
            Don’t have an account?
            <Link href="/signup" className="text-[#17C550]">
              Sign Up
            </Link>
          </p>
        </div>
      </header>
    </div>
    </div>
  );
};

export default SignInForm;

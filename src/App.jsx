import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-between w-[100%">
      <div
        className="w-[40%] h-[100vh] flex pt-24 flex-col gap-16  px-12"
        style={{
          backgroundImage: `url("/signup.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img src="/logo.svg" alt="logo" className="w-[158px] h-[28px]" />
        <p className="text-[36px] w-[176px] leading-[54px] font-bold text-white">
          Welcome
        </p>
        <div className="flex flex-col gap-8">
          <p className=" text-[14px] leading-[21px] text-white">
            Dive deep into Elixir through interactive workshops led by
            experienced mentors, providing practical experience and enhancing
            your understanding of the language.
          </p>
          <p className="bg-[#AD3989] h-[4px] w-[75px]" />
        </div>
      </div>
      <div className="w-[60%] h-[100vh] flex flex-col gap-8 py-12 px-16 bg-[#FFFFFF]">
        <div className="flex flex-col gap-1">
          <p className="text-[#333333] text-[20px] font-bold leading-[30px]">
            Register
          </p>
          <div className="flex text-[#666666] items-center gap-1">
            <p>Already have an account?</p>
            <p className=" underline text-[#AD3989]">Login</p>
          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="w-[45%]  flex flex-col gap-2">
            <p className="text-[#666666] text-[14px] leading-[21px]">
              First Name
            </p>
            <input
              type="text"
              className="border-[1px] border-[#CCCCCC]  focus:outline-none focus:ring-2 focus:ring-[#AD3989] rounded-[4px] focus:border-transparent h-[40px] p-4"
            />
          </div>
          <div className="w-[45%]  flex flex-col gap-2">
            <p className="text-[#666666] text-[14px] leading-[21px]">
              Last Name
            </p>
            <input
              type="text"
              className="border-[1px] border-[#CCCCCC]  focus:outline-none focus:ring-2 focus:ring-[#AD3989] rounded-[4px] focus:border-transparent h-[40px] p-4"
            />
          </div>
        </div>
        <div className="w-[100%]  flex flex-col gap-2">
          <p className="text-[#666666] text-[14px] leading-[21px]">
            Email Address
          </p>
          <input
            type="text"
            className="border-[1px] border-[#CCCCCC]  focus:outline-none focus:ring-2 focus:ring-[#AD3989] rounded-[4px] focus:border-transparent h-[40px] p-4"
          />
        </div>
        <div className="w-[100%]  flex flex-col gap-2">
          <p className="text-[#666666] text-[14px] leading-[21px]">Password</p>
          <input
            type="text"
            className="border-[1px] border-[#CCCCCC]  focus:outline-none focus:ring-2 focus:ring-[#AD3989] rounded-[4px] focus:border-transparent h-[40px] p-4"
          />
        </div>
        <div className="w-[100%]  flex flex-col gap-2">
          <p className="text-[#666666] text-[14px] leading-[21px]">Country</p>
          <input
            type="text"
            className="border-[1px] border-[#CCCCCC]  focus:outline-none focus:ring-2 focus:ring-[#AD3989] rounded-[4px] focus:border-transparent h-[40px] p-4"
          />
        </div>

        <p className="text-[#666666] text-[14px] leading-[21px]">
          By continuing past this page, you agree to the{" "}
          <span className="text-[#AD3989] font-semibold"> Terms of use </span>{" "}
          and understand that information will be used as described in our
          <span className="text-[#AD3989] font-semibold"> Privacy Policy </span>
        </p>
      </div>
    </div>
  );
}

export default App;

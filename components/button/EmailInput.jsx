import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
});

const EmailInput = () => {
  return (
    <div className="w-4/5 md:w-1/2 flex flex-row items-center justify-center bg-[#DF7A20]   lg:bg-[#F6F6F6] p-2 lg:p-4">
      <input
        type="text"
        placeholder="Enter your email"
        className=" bg-transparent hidden lg:flex focus:outline-0 w-full h-full placeholder-white lg:placeholder-slate-400 placeholder:text-[13px] placeholder:lg:text-base"
      />
      <div className={`flex lg:hidden text-white font-bold text-[13px] ${lato.className}`}>
        <p>Request an email</p>

      </div>
      <button  className="text-white bg-[#DF7A20] flex justify-center items-center md:rounded-full p-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] h-[14px] md:w-6 md:h-6"
        >
          <g clipPath="url(#clip0_559_9922)">
            <path
              d="M3.4 20.4L20.85 12.92C21.66 12.57 21.66 11.43 20.85 11.08L3.4 3.60002C2.74 3.31002 2.01 3.80002 2.01 4.51002L2 9.12002C2 9.62002 2.37 10.05 2.87 10.11L17 12L2.87 13.88C2.37 13.95 2 14.38 2 14.88L2.01 19.49C2.01 20.2 2.74 20.69 3.4 20.4Z"
              fill="#F5F9FD"
            />
          </g>
          <defs>
            <clipPath id="clip0_559_9922">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default EmailInput;

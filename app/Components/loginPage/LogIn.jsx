"use client";
import Image from "next/image";
import logo from "@/public/images/Logo.svg";
import { useState } from "react";

function LogIn() {
  const [doNotHaveAnAccount, setDoNotHaveAnAccount] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  console.log("isChecked", isChecked);

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-primaryBlack z-10">
      <div className="flex flex-col justify-center items-center h-full w-fit center ">
        <div className="mb-16 ">
          <Image src={logo} alt="Logo" className="w-40" />
        </div>
        {!doNotHaveAnAccount ? (
          <>
            <input
              type="email"
              placeholder="Email Address"
              className="focus:outline-none mb-4 bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Password"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none mb-4 bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <input
              type="text"
              placeholder="Password"
              className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
            />
            <div className=" flex items-center justify-between mb-5  bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm">
              <p className="">Do you want to open a Channel?</p>
              <input
                type="checkbox"
                name="isChanel"
                value="Channel"
                checked={isChecked}
                onChange={handleChange}
                className="w-36"
              />
            </div>
            {isChecked && (
              <input
                type="text"
                placeholder="Country Name"
                className="focus:outline-none mb-5  bg-transparent rounded-3xl border-2 border-secondaryBlack text-textColor w-rem26 h-12 pl-5 pr-5 pt-2 pb-2 text-sm"
              />
            )}
          </>
        )}

        <button
          className="cursor-pointer text-xs"
          onClick={() => {
            setDoNotHaveAnAccount(!doNotHaveAnAccount);
          }}
        >
          {!doNotHaveAnAccount
            ? "Don't have an Account?"
            : "Already have an Account?"}
        </button>
        <button className="bg-primaryRed w-64 h-12 rounded-3xl mt-16 border-2 border-primaryRed hover:bg-transparent transition-all hover:scale-105 active:scale-95">
          {!doNotHaveAnAccount ? "Log In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}

export default LogIn;

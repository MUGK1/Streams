"use client";
import { useState } from "react";
import Image from "next/image";
import ChannelLogo from "../../../public/images/ChannelLogo.png";

function ChannelInfo() {
  const [isSubscribed, setIsSubscribed] = useState(true);

  return (
    <div className="flex items-center justify-between w-rem34">
      <div>
        <Image src={ChannelLogo} alt="Channel Logo" className="w-48" />
      </div>
      <div>
        <h1 className="font-textFont font-black text-4xl mb-3">
          Branch Education
        </h1>
        <div className="text-primaryGray">
          <span>@BranchEducation</span>
          <span>•</span>
          <span>Since 2017</span>
        </div>
        <p className="text-primaryGray">4.1 Million subscribers</p>
        <p className="text-primaryGray mb-3">122 Million Views</p>
        <div className="flex items-center justify-between w-72">
          <button
            onClick={() => {
              setIsSubscribed(!isSubscribed);
            }}
            className="bg-white text-primaryRed rounded-3xl pt-2 pb-2 w-32 border-primaryRed border hover:bg-primaryRed hover:text-white transition-all"
          >
            Subscribe
          </button>
          {isSubscribed && (
            <button className="text-white bg-primaryRed rounded-3xl pt-2 pb-2 w-32 border-primaryRed border transition-all">
              Subscribed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChannelInfo;

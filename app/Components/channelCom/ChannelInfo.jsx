"use client";
import { useState } from "react";
import Image from "next/image";
import ChannelLogo from "../../../public/images/ChannelLogo.png";

function ChannelInfo() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="flex items-center justify-between w-rem34">
      <div>
        <Image src={ChannelLogo} alt="Channel Logo" className="w-44" />
      </div>
      <div>
        <h1 className="font-textFont font-black text-4xl mb-3">
          Branch Education
        </h1>
        <div className="text-primaryGray">
          <span>@BranchEducation </span>
          <span>•</span>
          <span> Since 2017</span>
        </div>
        <p className="text-primaryGray">4.1 Million subscribers</p>
        <p className="text-primaryGray mb-3">122 Million Views</p>
        <div className="flex items-center justify-between w-72">
          <button
            onClick={() => {
              setIsSubscribed(!isSubscribed);
            }}
            className={`rounded-3xl pt-2 pb-2 w-32 hover:bg-primaryRed hover:text-white transition-all ${
              isSubscribed
                ? "bg-primaryRed text-white"
                : "text-primaryRed bg-white"
            }`}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfo;

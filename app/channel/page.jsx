"use client";
import Image from "next/image";
import ChannelBanner from "../../public/images/ChannelBanner.png";
import ChannelInfo from "@/app/Components/channelCom/ChannelInfo";
import Video from "@/app/Components/Video/Video";
import UploadVideo from "@/app/Components/channelCom/UploadVideo";
import VideoInfoForm from "@/app/Components/channelCom/VideoInfoForm";
import { useState } from "react";

function channel() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div>
      {isClicked && (
        <VideoInfoForm isClicked={isClicked} setIsClicked={setIsClicked} />
      )}
      <div>
        <Image
          src={ChannelBanner}
          alt="Channel Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex items-center justify-between w-9/12 mx-auto mt-24">
        <ChannelInfo />
        <UploadVideo isClicked={isClicked} setIsClicked={setIsClicked} />
      </div>
      <div className="flex flex-wrap items-center justify-center mx-auto mt-24">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default channel;

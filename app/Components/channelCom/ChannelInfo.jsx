"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ChannelLogo from "../../../public/images/ChannelLogo.png";

function ChannelInfo(props) {
  const {
    channelId,
    channelName,
    avatarURL,
    createdAt,
    subscribersCount,
    isOwner,
    viewsCount,
  } = props;
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState(0);

  function dateFormat(date) {
    if (date === undefined) return;
    const splitDate = date.split("-");
    return splitDate[0];
  }

  function handleSubscribe() {
    if (!isSubscribed) {
      setSubscribers(subscribers + 1);
    } else {
      setSubscribers(subscribers - 1);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setSubscribers(subscribersCount);
    }, 500);
  }, [subscribersCount]);

  return (
    <div className="flex items-center justify-between w-rem34">
      <div>
        <Image src={ChannelLogo} alt="Channel Logo" className="w-44" />
      </div>
      <div>
        <h1 className="font-textFont font-black text-4xl mb-3">
          {channelName}
        </h1>
        <div className="text-primaryGray">
          <span>@{channelName} </span>
          <span>•</span>
          <span> Since {dateFormat(createdAt)}</span>
        </div>
        <p className="text-primaryGray">
          {subscribers > 0 ? subscribers : subscribersCount} subscribers
        </p>
        <p className="text-primaryGray mb-3">{viewsCount} Views</p>
        <div className="flex items-center justify-between w-72">
          <button
            onClick={() => {
              if (!isOwner) {
                setIsSubscribed(!isSubscribed);
                handleSubscribe();
              }
            }}
            className={`rounded-3xl pt-2 pb-2 w-32 ${
              isOwner
                ? "cursor-default"
                : "hover:bg-primaryRed hover:text-white"
            }  transition-all ${
              isOwner ? "bg-secondaryBlack text-textColor" : ""
            } ${
              isSubscribed
                ? "bg-primaryRed text-white"
                : "text-primaryRed bg-white"
            }`}
          >
            {isSubscribed || isOwner ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChannelInfo;

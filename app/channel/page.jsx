"use client";
import Image from "next/image";
import ChannelBanner from "../../public/images/ChannelBanner.png";
import ChannelInfo from "@/app/Components/channelCom/ChannelInfo";
import Video from "@/app/Components/Video/Video";
import UploadVideo from "@/app/Components/channelCom/UploadVideo";
import VideoInfoForm from "@/app/Components/channelCom/VideoInfoForm";
import { useEffect, useState } from "react";

function Channel(props) {
  const {
    channelId,
    channelName,
    avatarURL,
    createdAt,
    subscribersCount,
    isOwner,
    viewsCount,
    isSubscribed,
  } = props;
  const [isClicked, setIsClicked] = useState(false);
  const [channelVideos, setChannelVideos] = useState([]);
  const [totalSubscribersLikes, setTotalSubscribersLikes] = useState("0");
  const [totalSubscribersDisLikes, setTotalSubscribersDisLikes] = useState("0");
  const [totalUnSubscribersLikes, setTotalUnSubscribersLikes] = useState("0");
  const [totalUnSubscribersDisLikes, setTotalUnSubscribersDisLikes] =
    useState("0");

  useEffect(() => {
    fetch(
      `https://localhost:7001/api/Channel/get-channelVideos-by-id?ChannelId=${channelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setChannelVideos(data);
        console.log("data ", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [channelId]);

  console.log("channelVideos", channelVideos);

  useEffect(() => {
    fetch(
      `https://localhost:7001/api/Channel/get-subscribersDisLikes?ChannelId=${channelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalSubscribersDisLikes(data);
        console.log("data totalSubscribersDisLikes", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [channelId]);

  useEffect(() => {
    fetch(
      `https://localhost:7001/api/Channel/get-unsubscribersLikes?ChannelId=${channelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalUnSubscribersLikes(data);
        console.log("data totalUnSubscribersLikes", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [channelId]);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    fetch(
      `https://localhost:7001/api/Channel/get-subscribersLikes?ChannelId=${channelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalSubscribersLikes(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [channelId]);
  //
  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    fetch(
      `https://localhost:7001/api/Channel/get-unsubscribersDisLikes?ChannelId=${channelId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalUnSubscribersDisLikes(data);
        console.log("data totalSubscribersLikes", data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [channelId]);

  return (
    <div>
      {isClicked && (
        <VideoInfoForm
          channelId={channelId}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      )}
      <div>
        <Image
          src={ChannelBanner}
          alt="Channel Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="flex items-center justify-between w-9/12 mx-auto mt-24">
        <ChannelInfo
          channelId={channelId}
          channelName={channelName}
          avatarURL={avatarURL}
          createdAt={createdAt}
          isOwner={isOwner}
          viewsCount={viewsCount}
          subscribersCount={subscribersCount}
          isSubscribed={isSubscribed}
        />
        {isOwner && (
          <div className="flex flex-col items-center justify-center">
            <UploadVideo isClicked={isClicked} setIsClicked={setIsClicked} />
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-7">
              <div className="flex items-center p-2 rounded-xl bg-primaryRed">
                <p className="font-black mr-2 ">Total Subscribers Likes: </p>
                <p className="font-black mr-2 ">{totalSubscribersLikes}</p>
              </div>
              <div className="flex items-center p-2 rounded-xl bg-primaryRed">
                <p className="font-black mr-2 ">Total Subscribers DisLikes: </p>
                <p className="font-black mr-2 ">{totalSubscribersDisLikes}</p>
              </div>
              <div className="flex items-center p-2 rounded-xl bg-primaryRed">
                <p className="font-black mr-2 ">Total UnSubscribers Likes: </p>
                <p className="font-black mr-2 ">{totalUnSubscribersLikes}</p>
              </div>
              <div className="flex items-center p-2 rounded-xl bg-primaryRed">
                <p className="font-black mr-2 ">
                  Total UnSubscribers DisLikes:{" "}
                </p>
                <p className="font-black mr-2 ">{totalUnSubscribersDisLikes}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center pb-10 gap-10 justify-center mx-auto mt-24">
        {channelVideos.map((video) => {
          return (
            <Video
              key={video.id}
              id={video.id}
              title={video.title}
              description={video.description}
              views={video.viewsCount}
              publishedAt={video.publishedAt}
              thumbnail={video.thumbnailUrl}
              channelName={video.channelName}
              avatarUrl={video.avatarUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Channel;

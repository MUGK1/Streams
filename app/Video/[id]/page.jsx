"use client";
import Image from "next/image";
import Video from "@/app/Components/Video/Video";
import UserProfileImage from "@/app/Components/User/UserProfileImage";
import userAvatar from "../../../public/images/User_Avatar.svg";
import { useEffect, useState } from "react";

function VideoPage({ params }) {
  const { id } = params;
  const [video, setVideo] = useState([]);
  const [comments, setComments] = useState([]);
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    fetch(`https://localhost:7001/api/video/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setVideo(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    fetch(`https://localhost:7001/api/impression/comments/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    fetch(`https://localhost:7001/api/video/get-next-videos/?videoId=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNextVideos(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  function calculateDaysAgo(dateString1) {
    const date1 = new Date(dateString1);
    const today = new Date();
    const differenceInMillis = Math.abs(today - date1);
    const differenceInDays = Math.floor(
      differenceInMillis / (1000 * 60 * 60 * 24),
    );
    let result = " ";
    if (differenceInDays <= 365) {
      result = `${differenceInDays} days ago`;
    } else {
      const years = Math.ceil(differenceInDays / 356);
      result = `${years} years ago`;
    }

    return result;
  }

  return (
    <div className="flex flex-col">
      <iframe
        width="100%"
        style={{ height: "65vh" }}
        src={"https://youtube.com/embed/" + video.url + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex pl-2 w-full">
        <div className="w-3/4 m-4">
          <div className="font-textFont font-bold text-xl mb-4">
            {video.title}
          </div>
          <div className="w-full flex">
            <div className="w-3/4 flex">
              <div className="w-12">
                <Image
                  src={video.avatarUrl}
                  alt="Channel Avatar"
                  className="rounded-full w-12"
                  height="48"
                  width="48"
                />
              </div>
              <div className="text-white-600 font-textFont whitespace-nowrap ml-2">
                <span className="mx-1 block font-bold text-lg">
                  {video.channelName}
                </span>
                <span className="mx-1 inline-block text-sm font-thin text-gray-400">
                  {video.subscriptionsCount}
                  {" subscribers"}
                </span>
              </div>
              {video.IsSubscribed ? (
                <button className="text-white font-bold bg-gray-800 ml-14 rounded-full h-9 w-32">
                  Unsubscribe
                </button>
              ) : (
                <button className="text-primaryBlack font-bold bg-white ml-14 rounded-full h-9 w-32">
                  Subscribe
                </button>
              )}
            </div>
            <div className="w-1/4 flex justify-end">
              <div className="bg-gray-800 text-white px-4 rounded-full flex items-center h-9">
                <button>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    // className="fill-primaryRed"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.33342 11.6667V23.3333M9.33342 11.6667L4.66675 11.6666V23.3333H9.33342M9.33342 11.6667L15.3949 4.59488C15.9701 3.92385 16.875 3.63538 17.7325 3.84973L17.7879 3.8636C19.3533 4.25496 20.0585 6.07899 19.1635 7.42157L16.3334 11.6666H21.6539C23.1263 11.6666 24.2307 13.0137 23.942 14.4576L22.5419 21.4576C22.3238 22.5483 21.3662 23.3333 20.2539 23.3333H9.33342"
                      stroke="white"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <span className="font-semibold">12k</span>
                <span className="border-l-2 border-gray-600 mx-2 h-6"></span>
                <button>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.6666 16.3333L18.6666 4.66667M18.6666 16.3333L23.3333 16.3334L23.3333 4.66667L18.6666 4.66667M18.6666 16.3333L12.6051 23.4051C12.0299 24.0762 11.125 24.3646 10.2675 24.1503L10.2121 24.1364C8.64667 23.745 7.94153 21.921 8.83648 20.5784L11.6666 16.3334L6.34612 16.3334C4.87367 16.3334 3.7693 14.9863 4.05805 13.5424L5.45805 6.54244C5.67622 5.45172 6.63382 4.66667 7.74612 4.66667L18.6666 4.66667"
                      stroke="white"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="bg-gray-800 text-white px-4 ml-4 rounded-full flex items-center h-9 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="white"
                >
                  <path
                    d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="text-white font-bold">Share</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 mt-4 rounded-lg p-4">
            <span className="mx-1 font-bold inline-block">
              {video.viewsCount} {" views"}
            </span>
            <span className="font-bold text-lg">&#183;</span>
            <span className="mx-1 font-bold inline-block">
              {calculateDaysAgo(video.publishedAt)}
            </span>
            <p className="text-sm font-normal mt-2">
              {video.description} …more
            </p>
          </div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3 w-full mx-2">
              <Image src={userAvatar} alt="userAvatar" className="w-10 py-2" />
              <input
                className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Add a comment..."
                type="text"
              />
            </div>
            <div className="flex space-x-3">
              <button className="px-6 py-2 rounded-full bg-gray-800 text-white font-bold">
                Post
              </button>
            </div>
          </div>
          <div className="p-4">
            <span className="mx-1 font-bold inline-block mb-4">
              {comments.length} Comments
            </span>
            {comments.map((comment) => {
              return (
                <div className="flex items-start mx-2 mb-4">
                  <div className="mr-2">
                    <UserProfileImage initials={comment.userInitials} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold">
                      {comment.userName}{" "}
                    </span>
                    <span className="font-bold text-lg">&#183;</span>
                    <span className="text-xs text-gray-400">
                      {" "}
                      {calculateDaysAgo(comment.createdAt)}
                    </span>
                    <p className="text-sm">{comment.commentText}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/4 m-4">
          {nextVideos.map((video) => {
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
    </div>
  );
}

export default VideoPage;

"use client";
import Channel from "@/app/channel/page";
import { useEffect, useState } from "react";

export function channelPage({ params }) {
  const { id } = params;
  const [channelData, setChannelData] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7001/api/channel/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setChannelData(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <Channel
      channelId={id}
      channelName={channelData.name}
      avatarURL={channelData.avatarUrl}
      createdAt={channelData.createdAt}
      subscribersCount={channelData.subscribersCount}
    />
  );
}

export default channelPage;

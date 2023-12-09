"use client";
"use client";
import Image from "next/image";
import Video from "@/app/Components/Video/Video";
import LogIn from "@/app/Components/loginPage/LogIn";
import Genres from "./Components/Genres/Genre";
import { useState, useEffect } from "react";

export default function Home() {
  const [genres, setgenres] = useState([]);
  const [search, setSearch] = useState(" ");
  const [videos, setVideos] = useState([]);
  const [singleGenre, setSingleGenre] = useState("");

  useEffect(() => {
    fetch("https://localhost:7001/api/Video/get-genres", {
      method: "GET",
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setgenres(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://localhost:7001/api/Video/get-all-videos", {
      method: "GET",
      cache: "no-store",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setVideos(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://localhost:7001/api/Video/get-Videos-by-Genre?genre=${singleGenre}`,
      {
        method: "GET",
        cache: "no-store",
      },
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setVideos(data);
      });
    console.log(singleGenre);
  }, [singleGenre]);

  const handleGenreType = (genreType) => {
    setSingleGenre(genreType);
  };

  const [showLogin, setShowLogin] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setShowLogin(false);
    }
  }, []);
  return (
    <main className="p-0 m-0">
      <div className="flex justify-center my-3">
        {genres.map((item) => (
          <Genres selectedGenre={handleGenreType} data={item} />
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-10 justify-center mx-auto p-0 m-0">
        {videos.map((video) => (
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
        ))}
      </div>
    </main>
  );
}

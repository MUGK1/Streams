"use client";
import Image from "next/image";
import Video from "@/app/Components/Video/Video";
import LogIn from "@/app/Components/loginPage/LogIn";
import { useEffect, useState } from "react";

export default function Home() {
  const [showLogin, setShowLogin] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setShowLogin(false);
    }
  }, []);
  return (
    <main className="text-white">
      {showLogin && <LogIn setShowLogin={setShowLogin} />}
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
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </main>
  );
}

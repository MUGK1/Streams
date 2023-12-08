import thumbnail from "../../../public/images/Thumbnail.jpg";
import Image from "next/image";
import profile from "../../../public/images/channel_profile.jpg";
import dynamic from "next/dynamic";
import VideoButton from "@/app/Components/Video/VideoButton";

function Video({ props }) {
  const id = 13;
  return (
    <VideoButton id={id}>
      <div className="group w-80 rounded p-2">
        <div className="mb-2 group-hover:cursor-pointer">
          <Image
            src={thumbnail}
            alt="Logo"
            className="w-full rounded-md group-hover:rounded-none "
          />
        </div>
        <div className="w-full flex flex-start">
          <div className=" w-10">
            <Image
              src={profile}
              alt="profile Photo"
              className=" rounded-full w-8"
            />
          </div>
          <div className="w-60">
            <div className=" w-60 text-white truncate">
              <span className=" font-textFont font-bold mx-1 w-full">
                Next.js Projects: Build a Full-stack App with Next.js, Tailwind,
                Radix UI, and Prisma
              </span>
            </div>
            <div className="w-full text-gray-600 text-sm font-textFont whitespace-nowrap">
              <span className="mx-1 block ">Programming with Mosh</span>
              <span className="mx-1 inline-block mt-1"> 91k views </span>
              <span className="font-bold text-lg">&#183;</span>
              <span className="mx-1 inline-block">3 months ago </span>
            </div>
          </div>
        </div>
      </div>
    </VideoButton>
  );
}

export default Video;

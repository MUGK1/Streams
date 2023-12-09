import Image from "next/image";
import profile from "../../public/images/channel_profile.jpg";
import Video from "@/app/Components/Video/Video";

function VideoPage() {
  const embedUrl = `https://www.youtube.com/embed/Xh26-fF6fTM?autoplay=1&mute=0`;

  return (
    <div>
      <iframe
        width="100%"
        style={{ height: "65vh" }}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex w-full mt-4 mb-4 mx-auto space-x-4">
        <div className="flex flex-col w-3/5 ml-8 border-0 rounded-lg">
          <div className="w-10">
            <Image src={profile} className="rounded-full w-8" />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="flex flex-col w-2/5 border-0 rounded-lg">
          <Video></Video>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;

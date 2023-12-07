import Image from "next/image";
import profile from "../../public/images/channel_profile.jpg";

function VideoPage() {
  const embedUrl = `https://www.youtube.com/embed/Xh26-fF6fTM?autoplay=1&mute=0`;

  return (
    <div>
      <iframe
        width="100%"
        style={{ height: "65vh" }}
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <div className="w-full flex flex-start group-active:bg-backgroundGray ">
          <div className=" w-10">
            <Image
              src={profile}
              className=" rounded-full w-8"
              alt="profilePhoto"
            />
          </div>
          <div className="w-60">
            <div className=" w-60  text-white truncate">
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
    </div>
  );
}

export default VideoPage;

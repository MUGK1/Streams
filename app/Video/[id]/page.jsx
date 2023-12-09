import Image from "next/image";
import profile from "../../../public/images/channel_profile.jpg";
import Video from "@/app/Components/Video/Video";
import userAvatar from "../../../public/images/User_Avatar.svg";

function VideoPage({ params }) {
  const { id } = params;
  const embedUrl = `https://www.youtube.com/embed/Xh26-fF6fTM?autoplay=1&mute=0`;

  return (
    <div className="flex flex-col">
      <iframe
        width="100%"
        style={{ height: "65vh" }}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="flex pl-2 w-full">
        <div className="w-3/4 m-4">
          <div className="font-textFont font-bold text-xl mb-4">
            Next.js Projects: Build a Full-stack App with Next.js, Tailwind,
            Radix UI, and Prisma
          </div>
          <div className="w-full flex">
            <div className="w-3/4 flex">
              <div className="w-16">
                <Image
                  src={profile}
                  alt="profile Photo"
                  className="rounded-full w-16"
                />
              </div>
              <div className="text-white-600 text-sm font-textFont whitespace-nowrap ml-2">
                <span className="mx-1 block font-bold text-lg">
                  Programming with Mosh
                </span>
                <span className="mx-1 inline-block">91k views</span>
                <span className="font-bold text-lg">&#183;</span>
                <span className="mx-1 inline-block">3 months ago</span>
              </div>
              <button className="text-primaryRed font-bold bg-white ml-16 rounded-full h-9 w-40">
                Subscribe
              </button>
              {/* <button className="text-red bg-gray-500 rounded-full h-9 w-48">
                Unsubscribe
              </button> */}
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
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <span class="font-semibold">12k</span>
                <span class="border-l border-gray-600 mx-2 h-6"></span>
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
                      stroke-width="1.75"
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span>Share</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 mt-6 h-22 rounded-lg p-4">
            <p>
              The nanoscopic world is wild!! Looking at basic objects like a
              grain of salt under an electron microscope looks like nothing you
              would have expected. Furthermore, have you ever wondered whether
              seeing a single atom is possible? Or how do scientists and
              engineers create only a …more
            </p>
          </div>
          <div class="flex items-center justify-between p-4">
            <div class="flex items-center space-x-3 w-full mx-2">
              <Image src={userAvatar} alt="userAvatar" className="w-10 py-2" />
              <input
                class="flex-1 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
                placeholder="Add a comment..."
                type="text"
              />
            </div>
            <div class="flex space-x-3">
              <button class="px-6 py-2 rounded-full bg-blue-600 text-white">
                Comment
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 m-4">
          <Video></Video>
          <Video></Video>
        </div>
      </div>
    </div>
  );
}

export default VideoPage;

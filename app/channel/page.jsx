import Image from "next/image";
import ChannelBanner from "../../public/images/ChannelBanner.png";
import ChannelInfo from "@/app/Components/channelCom/ChannelInfo";
import Video from "@/app/Components/Video/Video";

function channel() {
  return (
    <div>
      <div>
        <Image
          src={ChannelBanner}
          alt="Channel Banner"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-9/12 mx-auto mt-24">
        <ChannelInfo />
      </div>
      <div className="flex flex-wrap items-center justify-center mx-auto mt-24">
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
      </div>
    </div>
    );
}

export default channel;

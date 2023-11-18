import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <div className=" w-full  flex flex-wrap justify-center items-center  gap-2 p-1">
      {videos.map((data, index) => (
        <div key={index}>
          {data?.id?.videoId && <VideoCard data={data} />}
          {data?.id?.channelId && <ChannelCard data={data} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;

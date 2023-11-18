import React from "react";
import { Link } from "react-router-dom";
import VerifiedIcon from "../svgs/VerifiedIcon";

const VideoCard = ({ data }) => {
  return (
    <div className=" md:w-[320px] h-auto w-full  rounded-md overflow-hidden shadow-lg flex flex-col justify-center items-center hover:scale-95 mb-3 md:mb-0">
      <Link to={`/video/${data?.id?.videoId}`}>
        <img
          src={data?.snippet?.thumbnails?.high?.url}
          alt={data?.snippet?.channelTitle}
          className=" object-cover"
        />
        <p className="text-slate-400 text-sm font-bold text-left pl-4 my-1">
          {data?.snippet?.title.slice(0, 30) + " ...."}
        </p>
      </Link>
      <Link to={`/channel/${data?.snippet?.channelId}`} className="w-full my-1">
        <div className="w-full flex justify-start gap-3 pl-4">
          <p className="text-slate-400 text-sm cursor-pointer">
            {data?.snippet?.channelTitle}
          </p>
          <VerifiedIcon />
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;

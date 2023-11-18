import React from "react";
import { Link } from "react-router-dom";
import VerifiedIcon from "../svgs/VerifiedIcon";

const ChannelCard = ({ data, marginTop, bolder }) => {
  return (
    <Link
      to={data?.snippet?.channelId ? `/channel/${data.snippet.channelId}` : `#`}
      className="md:w-[320px] h-auto w-full rounded-md overflow-hidden shadow-lg flex flex-col gap-3 justify-center items-center hover:scale-95 mb-3 md:mb-0"
      style={{ marginTop: marginTop }}
    >
      <img
        src={data?.snippet?.thumbnails?.medium?.url}
        alt={data?.snippet?.channelTitle}
        className=" w-36 h-36 rounded-full "
      />
      <div className="w-full flex justify-center gap-4">
        <p
          className={`text-slate-500 text-sm cursor-pointer text-center`}
          style={{ fontWeight: bolder }}
        >
          {data?.snippet?.channelTitle || data?.snippet?.title}
        </p>
        <VerifiedIcon />
      </div>
      {data?.statistics?.subscriberCount && (
        <p className="text-slate-300 font-medium ">
          Subscribers
          <span className="font-bold">
            {" " + parseInt(data.statistics.subscriberCount).toLocaleString()}
          </span>
        </p>
      )}
    </Link>
  );
};

export default ChannelCard;

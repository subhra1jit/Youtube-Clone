import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { fetchApiAllData } from "../utils/FetchApi";
import Videos from "./Videos";

const VideoDetails = () => {
  const { id } = useParams();
  const [suggestedVideo, setSuggestedVideo] = useState();
  const [videoDetails, setVideoDetails] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchApiAllData(
      `search?relatedToVideoId=${id}&part=id,snippet&type=video`
    ).then((data) => {
      setSuggestedVideo(data.items);
    });

    fetchApiAllData(
      `videos?part=contentDetails,snippet,statistics&id=${id}`
    ).then((data) => {
      setVideoDetails(data.items[0]);
    });
  }, [id]);

  return (
    <div className="w-11/12 flex lg:flex-row flex-col justify-center gap-3 mx-auto">
      <div className="w-full md:w-3/4 flex flex-col justify-start  ">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          className="react-player"
          controls
        />

        <h2 className="md:text-4xl text-xl font-bold text-slate-700 mt-5">
          {videoDetails?.snippet?.title}
        </h2>
        <p className="text-black font-bold mt-5">
          {"Total Views : " +
            parseInt(videoDetails?.statistics?.viewCount).toLocaleString()}
        </p>
        <p className="text-black font-bold">
          {"Total Likes : " +
            parseInt(videoDetails?.statistics?.likeCount).toLocaleString()}
        </p>
        <p className="text-black font-bold">
          {"Total Comments : " +
            parseInt(videoDetails?.statistics?.commentCount).toLocaleString()}
        </p>
        <div className="w-full flex justify-end px-5">
          <button
            className="px-5 py-2 text-slate-600 border-2 rounded-md"
            onClick={() => setShow(!show)}
          >
            {show ? "show" : "hide"}
          </button>
        </div>
        <p
          className={`text-slate-400 mt-10 text-sm md:text-base whitespace-pre-wrap overflow-hidden ${
            show ? "h-[50px]" : "h-auto"
          }`}
        >
          {videoDetails?.snippet?.description}
        </p>
      </div>
      <div className="md:w-1/4 w-full ">
        {suggestedVideo && <Videos videos={suggestedVideo} />}
      </div>
    </div>
  );
};

export default VideoDetails;

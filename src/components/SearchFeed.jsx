import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchApiAllData } from "../utils/FetchApi";
import VideoSkeleton from "./VideoSkeleton";
import Videos from "./Videos";

const SearchFeed = () => {
  const { searchValue } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchApiAllData(`search?part=snippet,id&q=${searchValue}`).then(
        (data) => {
          setVideos(data.items);
          setLoading(false);
          toast.success("Videos loaded successfully!");
        }
      );
    }, 1000);
    setLoading(true);
  }, [searchValue]);

  console;

  return (
    <div className="w-full h-[88vh]  flex justify-start items-center gap-2 bg-black md:flex-row flex-col">
      <ToastContainer />
      <div className="h-full w-full md:w-11/12 overflow-y-auto py-1 px-2  flex flex-col justify-start items-start ">
        <h1 className="text-2xl text-white font-bold block  w-full sticky p-2 -top-1 left-0 bg-black z-10">
          {searchValue}
          {" related "}
          <span className="text-2xl text-red-400 font-bold">Videos</span>
        </h1>
        {loading ? (
          <div className=" w-full  flex flex-wrap justify-center items-center  gap-2 p-1">
            {Array(9)
              .fill(0)
              .map((data, index) => (
                <VideoSkeleton key={index} />
              ))}
          </div>
        ) : (
          <Videos videos={videos} />
        )}
      </div>
    </div>
  );
};

export default SearchFeed;

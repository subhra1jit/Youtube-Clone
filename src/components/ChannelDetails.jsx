import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApiAllData } from "../utils/FetchApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelInfo, setChannelInfo] = useState();
  const [channelVideoCollections, setChannelVideoCollections] = useState();

  useEffect(() => {
    fetchApiAllData(`channels?part=snippet,statistics&id=${id}`).then((data) =>
      setChannelInfo(data.items[0])
    );
    fetchApiAllData(`search?channelId=${id}&part=snippet,id`).then((data) => {
      console.log(data.items);
      setChannelVideoCollections(data.items);
    });
  }, [id]);

  // console.log(Array.isArray(channelVideoCollections));
  return (
    <div className="w-full h-auto flex flex-col justify-start items-center gap-3 space-y-10 bg-black">
      <div className="w-full h-52 bg-gradient-to-r from-red-500 to-sky-200"></div>
      <ChannelCard data={channelInfo} marginTop={"-80px"} bolder={"bold"} />
      <div className="w-full md:w-4/5">
        {channelVideoCollections ? (
          <Videos videos={channelVideoCollections} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChannelDetails;

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoSkeleton = () => {
  return (
    <div className=" md:w-[320px] h-64 gap-1  w-full rounded-md overflow-hidden shadow-lg flex flex-col justify-center">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton className="w-full h-48" enableAnimation={true} />
        <Skeleton />
        <Skeleton />
      </SkeletonTheme>
    </div>
  );
};

export default VideoSkeleton;

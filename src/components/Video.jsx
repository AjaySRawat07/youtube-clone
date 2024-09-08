import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {abbreviateNumber} from "js-abbreviation-number"
import Time from "./loader/Time";

const Video = ({video}) =>{
    // console.log(video);
    return(
    <div className="top-5">
            <Link to={`/video/${video?.videoId}`}>
            <div>
                <div className="relative h-48 md:h-56 md: rounded-xl hover:rounded-none duration-200 overflow-hidden">
                    {/* thumbnail for video */}
                    <img 
                    className="h-full w-full"
                    src={video?.thumbnails[0]?.url} 
                    alt="" />
                    {video?.lengthSeconds && <Time time={video?.lengthSeconds}/>}
                </div>
            {/* channel logo */}
        <div className="flex mt-3 space-x-2">
          <div className="flex items-start">
             <div className="flex h-9 w-9 rounded-full overflow-hidden border">
                <img 
                className="h-full w-full rounded-full overflow-hidden"
                src={video?.author?.avatar[0].url} alt="" />
             </div>
             </div>
             {/* video title && channel name*/}
             <div>
                <span className="text-sm font-bold line-clamp-2">{video?.title}</span>
                <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">{video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-gray-600 ml-1 text[12px]"/>
                    )}
                </span>
                {/* views on video */}
                <div className="flex text-gray-500 text-xs font-semibold">
                    <span>{`${abbreviateNumber(
                        video?.stats?.views,2
                    )}views`}</span>
                    <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedTimeText}</span>
                 </div>
              </div>
            </div>
          </div>
        </Link>
    </div>
    )
}

export default Video;
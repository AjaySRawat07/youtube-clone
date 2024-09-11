import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings } from "react-icons/gi";
import { useUtils } from "../context/UtilsProvider";


function Sidebar() {

  const sidebarItems = [
    {
      groupItems : [
        {
          id: 1,
          name: "Home",
          icon: <GoHome />,
        },
        {
          id: 2,
          name: "Shorts",
          icon: <SiYoutubeshorts />,
        },
        {
          id: 3,
          name: "Subscriptions",
          icon: <MdOutlineSubscriptions />,
        },
      ],
    },
    {
      groupName :"You",
      groupItems : [
        {
          id: 1,
          name: "Your Channel",
          icon: <PiUserSquareThin />,
        },
        {
          id: 2,
          name: "History",
          icon: <MdHistory />,
        },
        {
          id: 3,
          name: "Playlists",
          icon: <MdOutlineSubscriptions />,
        },
        {
          id: 4,
          name: "Your Videos",
          icon: <BiVideo />,
        },
        {
          id: 5,
          name: "Watch later",
          icon: <MdOutlineWatchLater />,
        },
        {
          id: 6,
          name: "Liked videos",
          icon: <AiOutlineLike />,
        },
      ],
    },
    {
      groupName :"Explore",
      groupItems : [
        {
          id: 1,
          name: "Trending",
          icon: <SiTrendmicro />,
        },
        {
          id: 2,
          name: "Shopping",
          icon: <HiOutlineShoppingBag />,
        },
        {
          id: 3,
          name: "Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Films",
          icon: <PiFilmSlateLight />,
        },
        {
          id: 5,
          name: "Live",
          icon: <CgMediaLive />,
        },
        {
          id: 6,
          name: "Gaming",
          icon: <IoGameControllerOutline />,
        },
        {
          id: 7,
          name: "News",
          icon: <FaRegNewspaper />,
        },
        {
          id: 8,
          name: "Sport",
          icon: <TfiCup />,
        },
        {
          id: 9,
          name: "Courses",
          icon: <SiStylelint />,
        },
        {
          id: 10,
          name: "Fashion & beauty",
          icon: <PiLightbulbLight />,
        },
        {
          id: 11,
          name: "Padcasts",
          icon: <MdPodcasts />,
        },
      ],
    },
    {
      groupName :"More from youtube",
      groupItems : [
        {
          id: 1,
          name: "Youtube Premium",
          icon: <FaYoutube />,
        },
        {
          id: 2,
          name: "Youtube Studio",
          icon: <SiYoutubestudio />,
        },
        {
          id: 3,
          name: "Youtube Music",
          icon: <SiYoutubemusic />,
        },
        {
          id: 4,
          name: "Youtube Kids",
          icon: <SiYoutubekids />,
        },
      ],
    },
  ]
  const {isSlide,isMobileShow,setIsMobileShow} = useUtils();

  const ModelOverlay = () =>{
    return(
        <div
       className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
       onClick={() => setIsMobileShow(!isMobileShow)} 
       ></div>
    )
}

  return (
    <>
    <div className={`${ isMobileShow ? "fixed top-0 bottom-0 left-0 translate-all duration-300 bg-white z-40 h-screen w-[70%] sm:w-[30%] scrollbar-thin" : "hidden h-[calc(100vh-6.625rem)] w-[22%]"} xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
      {/* Home */}
      <div className=" space-y-2 items-center">
        {sidebarItems.map((group) => {
          return (
            <div>
              <h1 className="font-semibold text-lg">{group.groupName}</h1>
              {group.groupItems.map((item)=>(
                <div
                key={item.id}
                className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1"
              >
                <div className="text-xl cursor-pointer">{item.icon}</div>
                <span className="cursor-pointer">{item.name}</span>
              </div>
              ))}
              <br/>
              <hr />
            </div>
          );
        })}
      </div>

       {/* copyright section */}
      <span className="text-xs text-gray-600 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
        <br /> Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">© 2024 BY Ajay</p>
    </div>

    {isMobileShow ? <ModelOverlay /> : null}
    </>
  );
}

export default Sidebar;
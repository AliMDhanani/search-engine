import React from "react";
import HeaderOption from "./HeaderOption";
import {
  HiDotsVertical,
  HiMap,
  HiNewspaper,
  HiPlay,
  HiSearch,
  HiPhotograph,
} from "react-icons/hi";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly test-sm lg:text-base 
      lg:justify-start lg:space-x-36 lg:pl-52 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={HiSearch} title="All" selected />
        <HeaderOption Icon={HiPhotograph} title="Images" />
        <HeaderOption Icon={HiPlay} title="Videos" />
        <HeaderOption Icon={HiNewspaper} title="News" />
        <HeaderOption Icon={HiMap} title="Maps" />
        <HeaderOption Icon={HiDotsVertical} title="More" />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;

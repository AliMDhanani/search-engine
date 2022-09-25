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
    <div>
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={HiSearch} title="All" selected/>
        <HeaderOption Icon={HiPhotograph} title="Images" selected/>
        <HeaderOption Icon={HiPlay} title="Videos" selected/>
        <HeaderOption Icon={HiNewspaper} title="News" selected/>
        <HeaderOption Icon={HiMap} title="Maps" selected/>
        <HeaderOption Icon={HiDotsVertical} title="More" selected/>
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

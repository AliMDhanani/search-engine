import { useRouter } from "next/router";
import React, { useRef } from "react";
import { HiX, HiMicrophone, HiSearch } from "react-icons/hi";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <img
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
          />
          <HiX className="scale-125 h-7 sm:mr-3 text-gray-500 cursor-pointer hover transition duration-100 hover:scale-150" />
          <HiSearch className=" scale-125 h-15 text-blue-500 hidden sm:inline-flex " />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;

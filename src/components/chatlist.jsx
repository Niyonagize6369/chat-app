import React from "react";
import { RiMore2Fill } from "react-icons/ri";
import SearchModal from "./SearchModal";

const defaultAvatar = "/assets/default.jpg"; // Define the variable

const ChatList = () => {
  return (
    <section
      className="relative hidden lg:flex flex-col items-start
    justify-start bg-white h-[100vh] w-[100%] md:w-[600px]"
    >
      <header
        className="flex items-center justify-between w-full
      lg:border-b-[1px] border-[#898989b9] p-4 sticky
      md:static top-0 z-[100]"
      >
        <main className="flex items-center gap-3">
          <img
            src={defaultAvatar}
            className="w-[44px] h-[44px] object-cover rounded-full"
            alt=""
          />
          <span>
            <h3
              className="text-lg font-semibold p-0 text-[#2A3D39]
            md:text-[17px]"
            >
              ChatApp User
            </h3>
            <p className="p-0 font-light text-[#2A3D39] text-[15px]">
              @chatApp
            </p>
          </span>
        </main>
        <button
          className="bg-[#D9F2ED] w-[35px] h-[35px] p-2 flex items-center justify-center
        rounded-lg"
        >
          <RiMore2Fill color="[#01AA85]" className="w-[28px] h-[28px]" />
        </button>
      </header>
      <div className="w-[100%] mt-[10px] px-5">
        <header className="flex items-center justify-between">
          <h3 className="text-[16px]">Messages ({0})</h3>
          <SearchModal />
        </header>
      </div>
      <main className="flex flex-col items-start mt-[1.5rem] pb-3">
        <button
          className="flex items-start justify-between w-[190%]
        border-b border-[#9090902c] px-5 pb-2 pt-2"
        >
          <div className="flex items-start gap-3">
            <img
              src={defaultAvatar}
              className="h-[40px] w-[40px] rounded-full
            object-cover"
              alt=""
            />
            <span>
              <h2
                className="p-0 font-semibold text-[#2A3d39]
              text-left text-[17px]"
              >
                Rachel Niyonagize
              </h2>
              <p
                className="p-0 font-light text-[#2A3d39]
              text-left text-[14px]"
              >
                Hey there, How are you?
              </p>
            </span>
          </div>
          <p
            className="p-0 font-regular text-gray-400
              text-left text-[11px]"
          >
            6th February, 2025
          </p>
        </button>
        <button
          className="flex items-start justify-between w-[190%]
        border-b border-[#9090902c] px-5 pb-2 pt-2"
        >
          <div className="flex items-start gap-3">
            <img
              src={defaultAvatar}
              className="h-[40px] w-[40px] rounded-full
            object-cover"
              alt=""
            />
            <span>
              <h2
                className="p-0 font-semibold text-[#2A3d39]
              text-left text-[17px]"
              >
                Rachel Niyonagize
              </h2>
              <p
                className="p-0 font-light text-[#2A3d39]
              text-left text-[14px]"
              >
                Hey there, How are you?
              </p>
            </span>
          </div>
          <p
            className="p-0 font-regular text-gray-400
              text-left text-[11px]"
          >
            6th February, 2025
          </p>
        </button>
      </main>
    </section>
  );
};

export default ChatList;

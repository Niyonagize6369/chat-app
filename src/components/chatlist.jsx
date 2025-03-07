import React from "react";
import { RiMore2Fill } from "react-icons/ri";

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
            src="/assets/default.jpg"
            className="w-[44px] h-[44px] object-cover rounded-full"
            alt="Avatar"
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
      <div>

        
      </div>
    </section>
  );
};

export default ChatList;

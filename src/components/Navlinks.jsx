import React from "react";
import {
  RiArrowDownSFill,
  RiBardLine,
  RiChatAiLine,
  RiFile4Line,
  RiFolderUserLine,
  RiNotificationLine,
} from "react-icons/ri";
// import logo from "../../public/assets/logo.png";
const logo = "/assets/logo.png";

const Navlinks = () => {
  return (
    <section
      className="sticky lg:static top-0 flex items-center
    lg:items-start lg:justify-start h-[7vh] lg:h-[100vh] w-[100%]
    lg:w-[150px] py-8 lg:py-0 bg-[#01AA85]"
    >
      <main
        className="flex lg:flex-col items-center lg:gap-10 justify-between
      lg:px-0 w-[100%]"
      >
        <div
          className="flex items-start justify-center lg:border-b
        border-b-[1px] lg:w-[100%] p-4 border-[#ffffffb9]"
        >
          <span className="flex items-center justify-center">
            <img
              src={logo}
              className="w-[56px] h-[52px] object-contain bg-white
              rounded-lg p-2"
              alt=""
            />
          </span>
        </div>
        <ul
          className="flex lg:flex-col flex-row items-center gap-7 md:gap-10
        px-2 md:px-0"
        >
          <li>
            <button className="lg:text-[28px] text-[22px]">
              <RiChatAiLine color="#fff" />
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px]">
              <RiFolderUserLine color="#fff" />
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px]">
              <RiNotificationLine color="#fff" />
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px]">
              <RiFile4Line color="#fff" />
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px]">
              <RiBardLine color="#fff" />
            </button>
          </li>
          <li>
            <button className="lg:text-[28px] text-[22px]">
              <RiArrowDownSFill color="#fff" />
            </button>
          </li>
        </ul>
      </main>
    </section>
  );
};

export default Navlinks;

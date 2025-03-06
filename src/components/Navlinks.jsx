import React from "react";
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
      </main>
    </section>
  );
};

export default Navlinks;

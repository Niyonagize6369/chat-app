import React from "react";
import { FaUserPlus } from "react-icons/fa";


const Register = () => {
  return (
    <section
      className="flex flex-col justify-center 
    items-center h-[100vh] background-image"
    >
      <div
        className="bg-white shadow-lg p-5 rounded-xl
      h-[27rem] w-[20rem] flex flex-col justify-center items-center"
      >
        <div className="mb-10">
          <h1 className="text-center text-[20px] font-bold">Sign Up</h1>
          <p className="text-center text-sm text-gray-400">
            Welcome, create an account to continue
          </p>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="border border-green-200
          w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3
          font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Full Name"
          />

          <input
            type="email"
            className="bordee border-green-200
          w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3
          font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Email"
          />

          <input
            type="password"
            className="bordee border-green-200
          w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3
          font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Password"
          />
        </div>

        <div className="w-full">
          <button
            className="bg-[#01aa85] text-white 
          font-bold w-full p-2 rounded-md 
          flex items-center gap-2 justify-center
          "
          >
            Register <FaUserPlus />
          </button>
        </div>

        <div className="mt-5 text-center text-gray-400 text-sm">
          <button>Already have an account? Sign In</button>
        </div>
      </div>
    </section>
  );
};

export default Register;

import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

const Register = () => {
  // Fix 1: Correct `useState` usage
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  // Fix 2: Define functions outside any nested function
  const handleChangeUserData = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAuth = async () => {
    try {
      alert("Registration successful");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center h-[100vh] background-image">
      <div className="bg-white shadow-lg p-5 rounded-xl h-[27rem] w-[20rem] flex flex-col justify-center items-center">
        <div className="mb-10">
          <h1 className="text-center text-[20px] font-bold">Sign Up</h1>
          <p className="text-center text-sm text-gray-400">
            Welcome, create an account to continue
          </p>
        </div>
        <div className="w-full">
          <input
            type="text"
            name="fullname" // Fix 3: Changed `name="Full Name"` to `name="fullname"`
            onChange={handleChangeUserData}
            className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Full Name"
          />

          <input
            type="email"
            name="email"
            onChange={handleChangeUserData}
            className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            onChange={handleChangeUserData}
            className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]"
            placeholder="Password"
          />
        </div>

        <div className="w-full">
          <button
            onClick={handleAuth}
            className="bg-[#01aa85] text-white font-bold w-full p-2 rounded-md flex items-center gap-2 justify-center"
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

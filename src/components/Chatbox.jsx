import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
const defaultAvatar = "/assets/default.jpg"; // Ensure correct path

const Chatbox = () => {
  return (
    <section className="flex flex-col h-screen w-full bg-gray-100">
      {/* Header */}
      <header className="border-b border-gray-400 w-full h-[70px] p-4 bg-white flex items-center gap-3">
        <img
          src={defaultAvatar}
          className="w-11 h-11 object-cover rounded-full"
          alt="User Avatar"
        />
        <div>
          <h3 className="font-semibold text-[#2A3D39] text-lg">
            Chatfrik User
          </h3>
          <p className="font-light text-[#2A3D39] text-sm">@Chatfrik</p>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4">
        {/* Received Message */}
        <div className="flex items-start gap-3">
          <img
            src={defaultAvatar}
            className="h-10 w-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800">Chatfrik User</h4>
              <p className="text-gray-600">Hey buddy!</p>
            </div>
            <p className="text-gray-400 text-xs mt-1">7th Feb 2025</p>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex items-end gap-3 justify-end">
          <div className="text-right">
            <div className="bg-[#D0f2ed] px-4 py-2 rounded-lg shadow-sm">
              <h4 className="font-medium text-gray-800">You</h4>
              <p className="text-gray-600">Hello, how are you?</p>
            </div>
            <p className="text-gray-400 text-xs mt-1">7th Feb 2025</p>
          </div>
          <img
            src={defaultAvatar}
            className="h-10 w-10 object-cover rounded-full"
            alt="User Avatar"
          />
        </div>
      </main>

      {/* Chat Input */}
      <div className="p-3 bg-white border-t border-gray-300">
        <form className="flex items-center bg-white h-[45px] w-full px-3 rounded-lg shadow-lg">
          <input
            className="flex-grow text-[#2A3D39] outline-none text-[16px] pl-3 rounded-lg"
            type="text"
            placeholder="Write your message..."
          />
          <button className="ml-3 p-2 rounded-full bg-[#D0f2ed] hover:bg-[#c8eae3]">
            <RiSendPlaneFill color="#01AA85" size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chatbox;

import React, { useEffect, useMemo, useState } from "react";
import { RiMore2Fill } from "react-icons/ri";
import SearchModal from "./SearchModal";
import chatData from "../data/chats";
import { formatTimestamp } from "../utils/formatTimestamp";
import defaultAvatar from "/assets/default.jpg"; // Ensure this path is correct

const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    setChats(chatData);
  }, []);

  const sortedchats = useMemo(() => {
    return [...chats].sort((a, b) => {
      const aTimestamp =
        (a?.lastMessageTimestamp?.seconds || 0) +
        (a?.lastMessageTimestamp?.nanoseconds || 0) / 1e9;
      const bTimestamp =
        (b?.lastMessageTimestamp?.seconds || 0) +
        (b?.lastMessageTimestamp?.nanoseconds || 0) / 1e9;

      return bTimestamp - aTimestamp;
    });
  }, [chats]);

  return (
    <section className="relative hidden lg:flex flex-col bg-white h-screen w-[600px] border-r border-gray-300">
      {/* Header */}
      <header className="flex items-center justify-between w-full border-b border-gray-300 p-4 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <img
            src={defaultAvatar}
            className="w-12 h-12 object-cover rounded-full"
            alt="User avatar"
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Chatfrik User
            </h3>
            <p className="text-sm text-gray-500">@chatApp</p>
          </div>
        </div>
        <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200">
          <RiMore2Fill className="w-6 h-6 text-gray-600" />
        </button>
      </header>

      {/* Search & Messages Title */}
      <div className="w-full px-5 mt-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-700">
            Messages ({chats?.length || 0})
          </h3>
          <SearchModal />
        </div>
      </div>

      {/* Chat List */}
      <main className="flex flex-col mt-4 pb-3 overflow-y-auto w-full">
        {sortedchats.map((chat) =>
          chat?.users
            ?.filter((user) => user?.email !== "baxo@mailinator.com")
            ?.map((user) => (
              <button
                key={`${chat?.uid}-${user?.email}`}
                className="flex items-center justify-between w-full px-5 py-3 hover:bg-gray-100 transition-all border-b border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={defaultAvatar}
                    className="h-10 w-10 rounded-full object-cover"
                    alt="User avatar"
                  />
                  <div className="text-left">
                    <h2 className="font-semibold text-gray-800 text-md">
                      {user?.fullname || "Rachel Niyonagize"}
                    </h2>
                    <p className="text-sm text-gray-500 truncate w-48">
                      {chat?.lastMessage}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  {formatTimestamp(chat?.lastMessageTimestamp)}
                </p>
              </button>
            ))
        )}
      </main>
    </section>
  );
};

export default ChatList;

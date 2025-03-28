import React, { useEffect, useState, useMemo, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { messageData } from "../data/messageData";

const defaultAvatar = "/assets/default.jpg"; // Ensure correct path

const Chatbox = () => {
  const [messages, setMessages] = useState([]); // ✅ Corrected state variable
  const [messageText, setMessageText] = useState("");
  const senderEmail = "baxo@mailinator.com";
  const scrollref = useRef(null);

  useEffect(() => {
    setMessages(messageData);
  }, []);

  useEffect(() => {
    if (scrollref.current) {
      scrollref.current.scrollTop = scrollref.current.scrollHeight;
    }
  }, [messages]);

  const sortedMessages = useMemo(() => {
    return [...messages].sort((a, b) => {
      const aTimestamp =
        (a?.timestamp?.seconds || 0) + (a?.timestamp?.nanoseconds || 0) / 1e9;
      const bTimestamp =
        (b?.timestamp?.seconds || 0) + (b?.timestamp?.nanoseconds || 0) / 1e9;

      return aTimestamp - bTimestamp;
    });
  }, [messages]); // ✅ Fixed dependency

  const handleSendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      sender: senderEmail,
      text: messageText,
      timestamp: {
        seconds: Math.floor(Date.now() / 1000),
        nanoseconds: 0,
      },
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setMessageText("");
  };

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
      <main
        ref={scrollref}
        className="flex flex-col flex-grow overflow-y-auto p-4 space-y-4"
      >
        {sortedMessages.map((msg, index) => {
          // Convert timestamp to a readable date
          const messageDate = new Date(
            (msg.timestamp?.seconds || 0) * 1000
          ).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                msg.sender === senderEmail ? "justify-end" : ""
              }`}
            >
              {msg.sender !== senderEmail && (
                <img
                  src={defaultAvatar}
                  className="h-10 w-10 object-cover rounded-full"
                  alt="User Avatar"
                />
              )}
              <div
                className={`${
                  msg.sender === senderEmail ? "bg-[#D0f2ed]" : "bg-white"
                } px-4 py-2 rounded-lg shadow-sm`}
              >
                <h4 className="font-medium text-gray-800">
                  {msg.sender === senderEmail ? "You" : "Chatfrik User"}
                </h4>
                <p className="text-gray-600">{msg.text}</p>
                <p className="text-gray-400 text-xs mt-1">{messageDate}</p>{" "}
                {/* ✅ Display Date */}
              </div>
              {msg.sender === senderEmail && (
                <img
                  src={defaultAvatar}
                  className="h-10 w-10 object-cover rounded-full"
                  alt="User Avatar"
                />
              )}
            </div>
          );
        })}
      </main>

      {/* Chat Input */}
      <div className="p-3 bg-white border-t border-gray-300">
        <form
          onSubmit={handleSendMessage}
          action=""
          className="flex items-center bg-white h-[45px] w-full px-3 rounded-lg shadow-lg"
        >
          <input
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            className="flex-grow text-[#2A3D39] outline-none text-[16px] pl-3 rounded-lg"
            type="text"
            placeholder="Write your message..."
          />
          <button
            type="submit"
            className="ml-3 p-2 rounded-full bg-[#D0f2ed] hover:bg-[#c8eae3]"
          >
            <RiSendPlaneFill color="#01AA85" size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Chatbox;

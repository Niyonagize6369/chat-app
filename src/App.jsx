import React from "react";
import Chatbox from "./components/Chatbox";
import Chatlist from "./components/chatlist";
import Login from "./components/Login";
import Navlinks from "./components/Navlinks";
import Register from "./components/Register";
// import SearchModal from "./components/SearchModal";

const App = () => {
  return (
    <div>
      <div
        className="flex lg:flex-row flex-col items-start
      w-[100%]"
      >
        <Navlinks />
        <Chatlist />
        <Chatbox />
        {/* <SearchModal /> */}
      </div>

      <div className="hidden">
        <Register />
        <Login />
      </div>
    </div>
  );
};

export default App;

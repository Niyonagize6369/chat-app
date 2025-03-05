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
      {/* <Navlinks />
      <Login /> */}
      <Register />
      {/* <Chatbox />
      <Chatlist /> */}
    </div>
  ); 
};

export default App;

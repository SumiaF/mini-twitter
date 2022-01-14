import './App.css';

import { useEffect, useState } from "react";
import Messages from "./Messages";
import MainHeader from "./MainHeader";
import Sidebar from "./Sidebar";

function App() {
   const [data, setData] = useState();

  const [user, setUser] = useState({
    name: "",
    profilePic: "",
    handle: ""
  });
  const [messages, setMessages] = useState();
  const url = "";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.something));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
        Mini Twitter</h1>
      </header>
     <Messages />
      <Sidebar
        name={user.name}
        profilePic={user.profilePic}
        handle={user.handle}
      />
    </div>
  );
}

export default App;

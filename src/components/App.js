import "../styles/App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import NewsSidebar from "./NewsSidebar";

function App() {
  const [data, setData] = useState();

  const [user, setUser] = useState({
    name: "testUser",
    profilePic: "images/userprofilepic.png",
    handle: "@mytestuser",
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
      <Sidebar />
      <div className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <Messages />
      </div>
      <NewsSidebar />
    </div>
  );
}

export default App;

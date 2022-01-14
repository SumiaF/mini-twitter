import "../styles/App.css";
import { useEffect, useState } from "react";
import Messages from "./Messages";
import Sidebar from "./Sidebar";

function App() {
  const [data, setData] = useState();

  const [user, setUser] = useState({
    name: "testUser",
    profilePic: "userprofilepic.png",
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
      <header className="App-header">
        <h1>Mini Twitter</h1>
      </header>
      <div className="content-section pa">
        <Sidebar
          name={user.name}
          profilePic={user.profilePic}
          handle={user.handle}
        />
        <Messages />
      </div>
    </div>
  );
}

export default App;

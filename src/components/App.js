import "../styles/App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";
import NewsSidebar from "./NewsSidebar";
import { dummyMainFeedMessages } from "../data/dummyMessages";

function App() {
  const [data, setData] = useState();

  const [user, setUser] = useState({
    name: "testUser",
    profilePic: "images/userprofilepic.png",
    handle: "@mytestuser",
  });
  const [messages, setMessages] = useState();

  // TODO: 1. Start a loading indicator
  // TODO: 2. Make an API call here with the userHandle
  // TODO: 3. Pass the resulting messages in <MessageList /> instead of the dummy ones const url = "";

  const url = 'backend.com/path/to/the/api'
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.something));
  }, []);

  return (
    <div className="App content-container">
      <Sidebar />
      <main className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <MessageList messages={dummyMainFeedMessages} />
      </main>
      <NewsSidebar />
    </div>
  );
}

export default App;

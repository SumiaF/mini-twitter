import DummyMainFeedMessages from "../data/dummyMessages";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";
import MessageList from "./MessageList";

export default function MainFeed({}) {
  return (
    <div className="content-container">
      <Sidebar />
      <main className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <form action="">
          <input type="text" placeholder="What's happening?" />
          <button>Tweet</button>
        </form>
        {/* <MessageList messages={messages}/> */}
      </main>
      <NewsSidebar />
    </div>
  );
}

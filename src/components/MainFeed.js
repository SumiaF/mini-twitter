import DummyMainFeedMessages from "../data/dummyMessages";
import { useState } from "react";
import Messages from "./Messages";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";

export default function MainFeed({}) {
  return (
    <div className="content-container">
      <Sidebar />
      <main className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <Messages />
      </main>
      <NewsSidebar />
    </div>
  );
}

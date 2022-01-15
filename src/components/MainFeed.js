import DummyMainFeedMessages from "../data/dummyMessages";
import { useState } from "react";
import Messages from "./Messages";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";

export default function MainFeed({}) {
  return (
    <>
      <Sidebar />
      <div className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <Messages />
      </div>
      <NewsSidebar />
    </>
  );
}

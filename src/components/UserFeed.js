import DummyUserMessages from "../data/dummyMessages";
import { useState } from "react";
import Messages from "./Messages";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";

export default function UserFeed({}) {
  return (
    <>
      <Sidebar />
      <div className="user-feed">
        <h2>This is the feed for a user.</h2>
        <Messages />
      </div>
      <NewsSidebar />
    </>
  );
}

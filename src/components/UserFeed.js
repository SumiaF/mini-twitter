import DummyUserMessages, { dummyUserMessages } from "../data/dummyMessages";
import { useState } from "react";
import { useParams } from "react-router-dom";
import MessageList from "./MessageList";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";

export default function UserFeed({}) {
  let params = useParams();
  const userHandle = params.id;

  // TODO: 1. Start a loading indicator
  // TODO: 2. Make an API call here with the userHandle
  // TODO: 3. Pass the resulting messages in <MessageList /> instead of the dummy ones

  return (
    <div className="content-container">
      <Sidebar />
      <main className="user-feed">
        <h2>This is the feed for {userHandle}.</h2>
        <MessageList messages={dummyUserMessages} />
      </main>
      <NewsSidebar />
    </div>
  );
}

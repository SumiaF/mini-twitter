import DummyUserMessages from "../data/dummyMessages";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";

export default function MessageView({}) {
  return (
    <div className="content-container">
      <Sidebar />
      <main className="message-view">
        <h2>This is the expanded view of a message.</h2>
      </main>
      <NewsSidebar />
    </div>
  );
}

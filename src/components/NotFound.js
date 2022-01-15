import DummyUserMessages from "../data/dummyMessages";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";

export default function NotFound() {
  return (
    <>
      <Sidebar />
      <div>
        <h1>Ouch! This is awkward...</h1>
      </div>
      <NewsSidebar />
    </>
  );
}

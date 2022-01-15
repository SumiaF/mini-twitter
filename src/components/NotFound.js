import DummyUserMessages from "../data/dummyMessages";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NewsSidebar from "./NewsSidebar";
import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <>
      <Sidebar />
      <div className="error-section">
        <h1>Ouch! This is awkward...</h1>
      </div>
      <NewsSidebar />
    </>
  );
}

import DummyUserMessages from "../data/dummyMessages";
import { useState } from "react";
import UserFeed from "./UserFeed";
import MessageView from "./MessageView";
import AppRoutes from "../routes";
import { Route } from "react-router-dom";

export default function Layout() {
  return (
    <AppRoutes>
      <Route path="/user" element={<UserFeed />} />
      <Route path="/message" element={<MessageView />} />
    </AppRoutes>
  );
}

// TODO: Ask Chris about using routes.jsx and this Layout file instead of importing Sidebar and NewsSidebar everywhere
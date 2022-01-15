import "../styles/Sidebar.css"
import { useState } from "react";

export default function Sidebar({ name, profilePic, handle }) {
  return (
    <aside className="sidebar-userinfo">
       <ul>
        <li>
          <HomeIcon />
          <a>Home</a>
        </li>
        <li>
          <a>Explore</a>
        </li>
        <li>
          <a>Notifications</a>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>More</a>
        </li>
      </ul>
    </aside>
  );
}

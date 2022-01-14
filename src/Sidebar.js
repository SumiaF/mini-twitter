import { useState } from "react";

export default function Sidebar({ name, profilePic }) {
  return (
    <div className="sidebar-userinfo">
      <ul>
        <li>
          <img src="" alt="profilePic" /> userpic
        </li>
        <li> Username LoggedIn from:</li>
      </ul>
    </div>
  );
}

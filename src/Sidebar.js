import { useState } from "react";

export default function Sidebar({ name, profilePic, handle }) {
  return (
    <div className="sidebar-userinfo">
      <ul>
        <li ><img id="sidebar-userpic" src={profilePic} alt="profilePic" /></li>
        <li> Username: {name}</li>
        <li> userhandle: {handle}</li>
      </ul>
    </div>
  );
}

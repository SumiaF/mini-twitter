import "../styles/MessageList.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function MessageList({ messages }) {
  
  return (
    <div className="message-list">
      {messages.map((message) => (
        <article className="message">
        <img className="profile-picture" src={message.user.profile_pic}></img>
        <div className="message-body">
          <div className="message-author">
            <NavLink to={`/users/${message.user.handle}`}>{message.user.handle}</NavLink>&nbsp;·&nbsp;<span>{message.date}</span>
          </div>
          <div>{message.text}</div>
          <a href={message.link_url} target="_blank">{message.link_url} </a>
        </div>
      </article>
      ))}
    </div>
  );
}

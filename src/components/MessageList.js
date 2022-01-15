import "../styles/MessageList.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function MessageList({ messages, users }) {
  console.log("::MessageList => messages", { messages });

  return (
    <div className="message-list">
      {messages.length &&
        users.length &&
        messages.map((message) => {
          let imageLink = "";
          const user = users.find((u) => u.handle === message.user.handle);
          if (user) imageLink = user.profile_pic;
          return (
            <article className="message" key={message._id}>
              <img className="profile-picture" src={imageLink}></img>
              <div className="message-body">
                <div className="message-author">
                  <NavLink to={`/users/${message.user.handle}`}>
                    {message.user.handle}
                  </NavLink>
                  &nbsp;·&nbsp;<span>{message.date}</span>
                </div>
                <div>{message.text}</div>
                <a href={message.link_url} target="_blank">
                  {message.link_url}{" "}
                </a>
              </div>
            </article>
          );
        })}
    </div>
  );
}

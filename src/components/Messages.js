import { useState } from "react";

export default function Messages({}) {
  return (
    <div className="messages-parent">
      <div className="messages-content">
        <span className="messages-user">
          messagewriterpic + <span>name</span> <span>date</span>{" "}
        </span>
        <ul className="messages-messagebody">
          <li>Hello There, I am a test meaasge.</li>
          <li>picture in the message </li>
          <li>Link if exsist</li>
        </ul>
      </div>
      {/* For the sake of clarity how messages will appear on screen */}
      <div className="messages-content">
        <span className="messages-user">
          messagewriterpic + <span>name</span> <span>date</span>{" "}
        </span>
        <ul className="messages-messagebody">
          <li>Hello There, I am a test meaasge.</li>
          <li>picture in the message </li>
          <li>Link if exsist</li>
        </ul>
      </div>
    </div>
  );
}

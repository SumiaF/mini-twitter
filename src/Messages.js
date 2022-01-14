import { useState } from "react";

export default function Messages({}) {
  return (
    <>
      <h3 className="messages-user">
        messagewriter <span>date</span>{" "}
      </h3>
      <ul className="messages-messagebody">
        <li>Message Text I m test meaasge</li>
        <li> picture in message </li>
        <li> Link if exsist</li>
      </ul>
      <h3>Test</h3>
      <li>Message Text I m test meaasge</li>
      <li> picture </li>
    </>
  );
}

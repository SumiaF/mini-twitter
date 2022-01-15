import DummyUserMessages, { dummyUserMessages } from "../data/dummyMessages";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MessageList from "./MessageList";

export default function UserFeed({ users }) {
  let { id } = useParams();
  const userHandle = id;

  console.log(userHandle);

  const [messages, setMessages] = useState([]);

  const url = `https://wbs-twitter-clone.herokuapp.com/find/message`;

  useEffect(() => {
    fetch(`${url}/${userHandle}`)
      .then((res) => res.json())
      // .then((res) => console.log('::userFeed => res:', res))
      .then((messages) => setMessages(messages));
  }, []);

  // TODO: 1. Start a loading indicator
  // TODO: 2. Make an API call here with the userHandle
  // TODO: 3. Pass the resulting messages in <MessageList /> instead of the dummy ones

  return (
    <div className="content-container">
      <main className="user-feed">
        <h2>This is the feed for {userHandle}.</h2>
        <MessageList messages={messages} users={users} />
      </main>
    </div>
  );
}

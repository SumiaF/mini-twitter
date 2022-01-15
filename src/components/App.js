import {  Route, Routes } from "react-router-dom";

import "../styles/App.css";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MessageList from "./MessageList";
import NewsSidebar from "./NewsSidebar";
import { dummyMainFeedMessages } from "../data/dummyMessages";
import UserFeed from './UserFeed';
import MessageView from './MessageView';
import NotFound from './NotFound';

function App() {
  console.log('app is loaded')

  const [data, setData] = useState([]);

  const [users, setUsers] = useState([
    {
      name: "testUser",
      profilePic: "images/userprofilepic.png",
      handle: "@mytestuser",
    }
  ]);

  const [messages, setMessages] = useState([]);

  // TODO: 1. Start a loading indicator
  // TODO: 2. Make an API call here with the userHandle
  // TODO: 3. Pass the resulting messages in <MessageList /> instead of the dummy ones const url = "";

  const url = 'https://wbs-twitter-clone.herokuapp.com'

  // async function fetchMessagesWrapper() {
  //   await fetch(`${url}/messages`)
  //   .then((res) => res.json())
  //   .then(res => console.log('::fetchMessagesWrapper => res', res))
  //   .then((messages) => setMessages(messages));
  // }

  // useEffect(async () => {
  //   await fetchMessagesWrapper()
  //   console.log('in useEffect', messages)
  // }, [])

  console.log('before useEffect')
  console.log('data, users, messages, url', {data, users, messages, url})
  
  useEffect(() => {
    console.log(url)
    fetch(`${url}/messages`)
      .then((res) => res.json())
      .then((messages) => {
        console.log('::useEffect.fetchMessages => messages', messages)
        setMessages(messages)
      });

      fetch(`${url}/users`)
      .then((res) => res.json())
      .then((users) => {
        console.log('::useEffect.fetchUsers => users', users)
        setUsers(users)
      })
  }, []);

  return (
    <div className="App content-container">
      <Sidebar />
      <main className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <Routes>
          <Route path="/" element={<MessageList messages={messages} users={users}/>} />
          <Route path="users/:id" element={<UserFeed />}/>
          <Route path="messages/:id" element={<MessageView />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </main>
      <NewsSidebar />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import "../styles/AddTweets.css";

import React from "react";

export default function AddTweet() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const temp = localStorage.getItem("tweets");
    const loadedTweets = JSON.parse(temp);
    if (loadedTweets) {
      setTweets(loadedTweets);
      console.log({ loadedTweets });
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(tweets);
    localStorage.setItem("tweets", temp);
  }, [tweets]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTweet = {
      id: new Date().getTime(),
      text: tweet
    };
    console.log(newTweet);

    setTweets([...tweets, newTweet]);
    setTweet("");
    console.log(tweets);
  }

  return (
    <div className="addTweet">
      <div className="column">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            placeholder="What's happening?"
          />
          <br />
          <button type="submit">Tweet</button>
        </form>
        <ul>
          {tweets.map((tweet) => (
            <li key={tweet.id}>{tweet.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
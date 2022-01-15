import DummyMainFeedMessages from "../data/dummyMessages";
import MessageList from "./MessageList";

export default function MainFeed({}) {
  return (
    <div className="content-container">

      <main className="main-feed">
        <h2>This is the main feed of all users.</h2>
        <form action="">
          <input type="text" placeholder="What's happening?" />
          <button>Tweet</button>
        </form>
        {/* <MessageList messages={messages}/> */}
      </main>

    </div>
  );
}

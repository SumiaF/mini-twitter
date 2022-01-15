import "../styles/Sidebar.css"

export default function Sidebar() {
  return (
    <aside className="sidebar">
       <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Explore</a>
        </li>
        <li>
          <a>Notifications</a>
        </li>
        <li>
          <a>Messages</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>More</a>
        </li>
      </ul>
    </aside>
  );
}

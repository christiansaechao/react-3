import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "200px", padding: "1rem", background: "#eee" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
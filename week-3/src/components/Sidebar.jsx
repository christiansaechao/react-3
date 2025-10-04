import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "200px", padding: "1rem", background: "#eee" }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <NavLink
              className={(isActive) =>
                isActive ? "text-red-500" : "text-black"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/logged-in/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/logged-in/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

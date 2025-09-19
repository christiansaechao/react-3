import { useState } from "react";
import axios from "axios";
import "./App.css";
import { Navbar } from "./components/day-1/navbar";
import { Drum } from "./components/day-1/drum";
import Header from "./components/day-1/header";
import { UserProfile } from "./components/day-1/userProfile";

const count = 12;

function App() {
  const [randomUsers, setRandomUsers] = useState([]);
  //https://randomuser.me/api/?results=10

  async function fetchUsers() {
    const { data } = await axios.get(
      `https://randomuser.me/api/?results=${count}`
    );
    setRandomUsers(data.results);
  }

  const navLinks = [
    { link: "#", text: "DSSTORE" },
    { link: "#", text: "Hot Deals" },
    { link: "#", text: "Best Sellers" },
    { link: "#", text: "New Products" },
  ];

  const navButtons = [
    { id: "search", icon: "🔍" },
    { id: "favourites", icon: "❤️" },
    { id: "cart", icon: "🛒" },
    { id: "profile", icon: "🧑" },
  ];

  const drums = [
    { type: "acoustic", price: 200 },
    { type: "electronic", price: 1200 },
    { type: "mixed", price: 2300 },
    { type: "air", price: 0 },
  ];

  return (
    <>
      <Navbar navLinks={navLinks} navButtons={navButtons} />
      <div className="flex flex-row gap-4">
        <button onClick={fetchUsers}>Users</button>
        <Drum />
        <Header />
        {randomUsers.map((user, i) => (
          <UserProfile key={i} user={user} />
        ))}
      </div>

      {drums.map((drum, index) => (
        <div key={index}>
          <h1>{drum.type}</h1>
          <p>{drum.price}</p>
        </div>
      ))}
    </>
  );
}

export default App;

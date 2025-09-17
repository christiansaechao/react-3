import "./App.css";
import { Navbar } from "./components/navbar";
import { Drum } from "./components/drum";
import Header from "./components/header";

function App() {

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

  return (
    <>
      <Navbar navLinks={navLinks} navButtons={navButtons} />
      <div className="flex flex-row gap-4">
        <Drum />
        <Header />
      </div>
    </>
  );
}

export default App;

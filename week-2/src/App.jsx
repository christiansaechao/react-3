import { useState } from "react";
import useFetchData from "./custom-hooks/useFetchData";
import "./App.css";

/**
 * Build a dashboard - due on Thursday
 * - Components, API Request
 * - useState, useEffect
 * - map, filter, reduce
 */

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, error, getData] = useFetchData();
  // https://randomuser.me/api/

  return (
    <>
      <div className="card">
        <button onClick={() => getData(url, key)}>Get Recipe</button>
        <button onClick={() => getData("https://randomuser.me/api/")}>Get User</button>
      </div>
    </>
  );
}

export default App;

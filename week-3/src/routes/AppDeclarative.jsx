import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "../components/todo";

export default function AppDeclarative() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

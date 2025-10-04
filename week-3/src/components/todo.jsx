import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoCard from "./TodoCard";
import { saveTodo } from "../store/todoSlice";
import { Link } from "react-router";
import { NavLink } from "react-router";
import { useBear } from "../store/bear";

const Todo = () => {
  const [cart, setCart] = useState(
    { name: "Headphones", price: "100.00" },
    { name: "backpack", price: "50.00" },
    { name: "coffee maker", price: "20.00" }
  );

  const totalPrice = cart.reduce((acc, curr) => (acc += curr.price), 0);

  const [todo, setTodo] = useState(null);
  const bears = useBear((state) => state.bears);
  // const increasePopulation = useBear((state) => state.increasePopulation);
  const { increasePopulation, removeAllBears, updateBears } = useBear(
    (state) => state
  );

  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    console.log("something happens in here");
  }, [todo]);

  return (
    <>
      Bears: {bears} <br />
      <button onClick={increasePopulation}>increase</button>
      <div>Todo</div>
      <input
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="type in your task"
        value={todo}
      />
      <button onClick={() => dispatch(saveTodo(todo))}>Create Task</button>
      {allTodos.map((todo) => {
        return <TodoCard key={todo.id} todo={todo} />;
      })}
    </>
  );
};

export default Todo;

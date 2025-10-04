import React, { useState, useEffect } from "react";

/**
 * Using map return a list of all the numbers in nums doubled. put them in a <p></p> tag
 */

const DoubleNum = () => {
  const nums = [1, 2, 3, 4, 5];

  return (
    <>
      {nums.map((num) => {
        return <div>{num * 2}</div>;
      })}
    </>
  );
};

/**
 * Return the elements in the frameworks array each as a div element
 */

const JSXElements = () => {
  const frameworks = ["react", "vue", "angular"];

  return (
    <>
      {frameworks.map((framework) => {
        return <div>{framework}</div>;
      })}
    </>
  );
};

// Component mapping.jsx
import { UsersList } from "./UsersList";
import SelectedUsers from "./SelectedUsers";

const Mapping = () => {
  // [selectedUsers] => read only
  // [setSelectedUsers] => function to update selectedUsers
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [name, setName] = useState('Chris');

  // spread operator
  const addNewSelectedUser = (newUser) => {
    setSelectedUsers([...selectedUsers, newUser]);
    localStorage.setItem("item added to local storage");
  }
  
  const users = [
    { employeeId: 1, name: "Alice" },
    { employeeId: 2, name: "Bob" },
    { employeeId: 3, name: "Charlie" },
  ];

  useEffect(() => {
    console.log("Use Effect is being ran")
    const cartItems = localStorage.getItem("Our items");
    setItems(cartItems);
  }, []);

  return (
    <div>
      <UsersList users={users} addNewSelectedUser={addNewSelectedUser} />
      <SelectedUsers selectedUsers={selectedUsers} />
    </div>
  );
};

export default Mapping;

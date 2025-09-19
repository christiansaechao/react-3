import React from "react";

/**
 * Name, gender, email, picture
 * 
email: "madison.wilson@example.com"
gender: "female"
name: {title: 'Mrs', first: 'Madison', last: 'Wilson'}
picture: large: "https://randomuser.me/api/portraits/women/3.jpg"
 */

export const UserProfile = ({ user }) => {
  return (
    <div >
      <img src={user.picture.large} />
      <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
      <p>{user.gender}</p>
      <p>{user.email}</p>
    </div>
  );
};

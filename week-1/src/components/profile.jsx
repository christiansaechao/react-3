import React from "react";

/**
 * props {
 *  name: "damien"
 *  personObj: {
 *     name: "damien",
 *     age: 12,
 *     hobby: "basketball"
 *  }
 * }
 */

const Profile = ({ profile }) => {
  return (
    <>
      <div>{profile}</div>
    </>
  );
};

export default Profile;

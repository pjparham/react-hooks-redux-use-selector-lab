import React from "react";
import { useSelector } from "react-redux";

function Users() {

  const users = useSelector((state) => state.users);
  const userCount = useSelector((state) => state.users.length)
  const displayUsers = users.map((user) => <li key={user.username}>{user.username}</li>)
  return (
    <div>
      <ul>
        Users!
        {displayUsers}
      </ul>
      Total Users: {userCount}
    </div>
  );
}

export default Users;

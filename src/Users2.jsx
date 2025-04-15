import React, { use } from "react";

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);
  // console.log("user 2 data:", users);
  return (
    <div className="grid grid-cols-3 gap-2">
      {users.map((user) => {
        return (
          <div key={user.id} className="border-red-100 border-1 p-3">
            <li>{user.name}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Users2;

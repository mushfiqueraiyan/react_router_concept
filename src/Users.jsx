import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";

const Users = () => {
  const users = useLoaderData();

  // console.log(users);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };
  return (
    <>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <li>{user.name}</li>
              <Link to={`/users/${user.id}`}>
                <button>Show Details</button>
              </Link>

              <button onClick={handleNavigate}>users</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;

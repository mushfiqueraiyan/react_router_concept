import React, { Suspense, useState } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import UsersDetails2 from "./UsersDetails2";

const Users = () => {
  const users = useLoaderData();

  // console.log(users);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };

  const [info, setInfo] = useState(false);

  const yoPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${users.id}`
  ).then((res) => res.json());

  const location = useLocation();

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
              <button onClick={() => setInfo(!info)}>
                {info ? "Hide" : "Show"} Info
              </button>
              {info && (
                <Suspense fallback={<span>Loading....</span>}>
                  <UsersDetails2 yoPromise={yoPromise} />
                </Suspense>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Users;

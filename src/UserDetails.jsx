import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  const { name } = user;
  return (
    <div>
      UserDetails here
      <h1>{name}</h1>
    </div>
  );
};

export default UserDetails;

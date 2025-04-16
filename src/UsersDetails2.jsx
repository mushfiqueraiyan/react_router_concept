import React, { use } from "react";

const UsersDetails2 = ({ yoPromise }) => {
  const { name, username } = use(yoPromise);
  return <div>UsersDetails2 {name}</div>;
};

export default UsersDetails2;

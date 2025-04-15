import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
      <nav className="flex gap-3 bg-amber-300 mb-5">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-amber-700 text-white " : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-amber-700 text-white" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-amber-700 text-white" : ""
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/users2"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-amber-700 text-white" : ""
          }
        >
          Users2
        </NavLink>
      </nav>
    </>
  );
};

export default Header;

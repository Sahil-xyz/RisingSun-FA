import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <p>Rising Sun FA</p>
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex justify-between items-center gap-4">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Join</Link>
            </li>
            <li>
              <Link>Teams</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          {isLoggedIn ? (
            <Link to="/profile">Profile</Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
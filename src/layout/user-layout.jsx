import React from "react";
import { Outlet, Link } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="container">
      <div className="layout__block">
        <div className="layout__item">
          <div>
            <Link to="/user">Profile</Link>
          </div>
          <div>
            <Link to="/user/address">Address</Link>
          </div>
          <div>
            <Link to="/user/change-profile">Change-profile</Link>
          </div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";

export default function CustomerHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Incentive System for Car Dealers
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/dealerSignIn"
            >
              Dealer Sign-In
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/manufacturerSignIn"
            >
              Manufacturer Sign-In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

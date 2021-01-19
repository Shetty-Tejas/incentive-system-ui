import React from "react";
import { NavLink } from "react-router-dom";

export default function DealerHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Incentive System for Car Dealers
      </a>
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
              to="/dealer/createDeals"
            >
              Create Deals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/dealer/redefineDeals"
            >
              Redefine Deals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/dealer/fetchAllDeals"
            >
              Fetch all Deals
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

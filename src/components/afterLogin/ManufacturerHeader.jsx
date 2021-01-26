/* eslint-disable max-lines-per-function */
import React from "react";
import { NavLink } from "react-router-dom";

export default function ManufacturerHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/manufacturer/">
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
              to="/manufacturer/insertCar"
            >
              Insert Car
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/manufacturer/alterStatus"
            >
              Alter Status
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/manufacturer/fetchAllCars"
            >
              Fetch All Cars
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

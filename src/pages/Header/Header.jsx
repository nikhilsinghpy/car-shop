import React from "react";
import logo from "../../assets/New_folder/SipTok_Logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary px-4 py-3">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <Link class="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <div className="d-flex gap-3">
          <button class="bg-primary header-btn" type="submit">
            <FaShoppingCart />{" "}
            <span>
              send <br /> Query
            </span>
          </button>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link text-white text-bold" href="#">
                Features
              </a>
              <a class="nav-link text-white text-bold" href="#">
                Pricing
              </a>
              <a class="nav-link text-white text-bold disabled" aria-disabled="true">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

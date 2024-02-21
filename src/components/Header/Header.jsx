import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import "./header.scss";
import LinkNavBar from "./LinkNavbar";
import data from "../../data/datas.json";
import SearchFormHeader from "./SearchFormHeader";

const Header = () => {
  const categoriesSet = new Set();
  data.forEach((item) => {
    categoriesSet.add(item.category);
  });
  const categories = Array.from(categoriesSet);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleNavLink = () => {
    setNavbarOpen(false);
  };

  return (
    <header className="header-shadow w-100">
      <div className="container">
        <nav className="navbar navbar-expand-lg d-flex justify-content-between">
          <section className="ms-2">
            <NavLink className="navbar-brand" to="/">
              <img
                src={logo}
                alt='Logo "Trouve ton Artisan"'
                width="131"
                height="72"
                className="container-fluid"
              />
            </NavLink>
          </section>

          <section className="d-flex">
            <div className="mx-2">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggler"
                aria-controls="navbarToggler"
                aria-expanded={navbarOpen ? "true" : "false"}
                aria-label="Toggle navigation"
                onClick={handleNavToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  navbarOpen ? "show" : ""
                }`}
                id="navbarToggler"
              >
                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                  {categories.map((categories, index) => (
                    <LinkNavBar
                      key={index}
                      category={categories}
                      onClick={handleNavLink}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <SearchFormHeader />
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;

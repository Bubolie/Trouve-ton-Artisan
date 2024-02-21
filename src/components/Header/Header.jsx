import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import imageLoupe from "../../assets/images/loupe.svg";
import "./header.scss";
import LinkNavBar from "./LinkNavbar";
import data from "../../data/datas.json";


const Header = () => {
  
  const categoriesSet = new Set();
  data.forEach((item) => {
    categoriesSet.add(item.category);
  });
  const categories = Array.from(categoriesSet);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleNavLink = () => {
    setNavbarOpen(false);
  };

  const handleSearchChange = (e) => {
    let value = e.target.value
    setSearchTerm(value);
    
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`resultats-de-recherche/${searchTerm}`);
    setSearchTerm("")
  };

  return (
    <header className="container">
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
              className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}
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
          <form
            className="navbar-form"
            role="search"
            onSubmit={handleSearchSubmit}
          >
            <button
              className="btn d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#searchCollapse"
              aria-expanded="false"
              aria-controls="searchCollapse"
            >
              <img
                src={imageLoupe}
                className="logo"
                alt="logo d'une loupe"
                width="512"
                height="512"
              />
            </button>

            <div className="collapse d-lg-block " id="searchCollapse">
              <div className="d-flex ">
                <input
                  className="form-control me-2 bg-search"
                  name="search"
                  type="search"
                  placeholder="Nom, spécialité, ville"
                  value={searchTerm}
                  aria-label="Search"
                  onChange={handleSearchChange}
                  required
                />
                <button className="btn" type="submit">
                  <img
                    src={imageLoupe}
                    className="logo-mini"
                    alt="logo d'une loupe"
                    width="512"
                    height="512"
                  />
                </button>
              </div>
            </div>
          </form>
        </section>
      </nav>
      <div className="header-border"></div>
    </header>
  );
};

export default Header;

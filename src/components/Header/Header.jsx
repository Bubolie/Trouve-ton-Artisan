import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import imageLoupe from "../../assets/images/loupe-24.png";
import "./header.scss";
import HeaderNavBar from "./HeaderNavbar";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleNavLink = () => {
    setNavbarOpen(false);
  };

//   const [searchTerm, setSearchTerm] = useState("");
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
    
//   };
// console.log(handleSearchChange);
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between header-border">
        <div className="ms-2">
          <NavLink className="navbar-brand active" to="/">
            <img
              src={logo}
              alt='Logo "Trouve ton Artisan"'
              width="131"
              height="72"
              className="container-fluid"
            />
          </NavLink>
        </div>

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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <HeaderNavBar category="Bâtiment" onClick={handleNavLink} />
                <HeaderNavBar category="Services" onClick={handleNavLink} />
                <HeaderNavBar category="Fabrication" onClick={handleNavLink} />
                <HeaderNavBar category="Alimentation" onClick={handleNavLink} />
              </ul>
            </div>
          </div>
          <form className="navbar-form" role="search">
            <button
              className="btn d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#searchCollapse"
              aria-expanded="false"
              aria-controls="searchCollapse"
            >
              <img src={imageLoupe} alt="loupe" />
            </button>

            <div className="collapse d-lg-block " id="searchCollapse">
              <div className="d-flex ">
                <input
                  className="form-control me-2 bg-search"
                  type="search"
                  placeholder="Nom, spécialité, ville"
                  // value={searchTerm}
                  aria-label="Search"
                  // onChange={handleSearchChange}
                />
                <button className="btn" type="submit">
                  <img src={imageLoupe} alt="loupe" />
                </button>
              </div>
            </div>
          </form>
        </section>
      </nav>
    </header>
  );
};

export default Header;

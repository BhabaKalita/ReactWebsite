import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <div className = "container-fluid nav_bg">
            <div className = 'row'>
                <div className="col-10 mx-auto">

              
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">BhabaKalita</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a exact className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/service">Service</a>
        </li>

        <li className="nav-item">
          <a activeClassName = '.menu_active' className="nav-link" href="/about">About</a>
        </li>

        <li className="nav-item">
          <a activeClassName = '.menu_active' className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
            </div>
        </div>

        </>
    );

}

export default Navbar;
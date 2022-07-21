import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Router } from './routers/Router';

export const App = () => {

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-sm ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/sequelize">sequelize</Link>
              <Link className="nav-link" to="/pg">Pg</Link>
            </div>
          </div>
        </div>
      </nav>
      <Router />
    </div>
  )
}

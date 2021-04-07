import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const navbar = () =>(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" to='/'>Blog App</a>
    <button
     className="navbar-toggler" 
     type="button" 
     data-toggle="collapse" 
     data-target="#navbarNav" 
     aria-controls="navbarNav" 
     aria-expanded="false" 
     aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <NavLink a className="nav-link" exact to ='/'>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink a className="nav-link" exact to ='/blog'>blog</NavLink>
            </li>
        </ul>
    </div>
  </nav>
);

export default navbar;
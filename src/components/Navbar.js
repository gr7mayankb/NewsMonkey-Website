import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
        <div className="container-fluid">
            <h1 className="navbar-brand text-light font-weight-bolder mx-2" to="/">NewsMonkey</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/contact'>Contact Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/general'>General</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/business'>Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/entertainment'>Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/health'>Health</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/science'>Science</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/sports'>Sports</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link text-light" to='/technology'>Technology</Link>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2 bg-muted text-secondary" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success text-light font-weight-bolder" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav>
      </div>
    )
  }
}

import React from "react";
import logo from "../assets/images/logoNew.png" ;
import {Link} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

const Navigation = () =>{
return(
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="brand-logo" className="logo2"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link px-3 " aria-current="page" to="/" >HOME</Link> 
        </li> 
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle px-3" href="/#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PROPERTIES
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavHashLink className="dropdown-item" to="/#feat-sec">Featured</NavHashLink></li>
           <li> <Link to ="/all" className="dropdown-item" >All Listings</Link></li>
                     </ul>
                     </li>
        <li className="nav-item">
          <Link to="/map" className="nav-link px-3">INTERACTIVE MAP </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link px-3 hashlink" to="/contactus" >SELLERS</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle px-3" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR TEAM
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link className="dropdown-item" to="/aboutus">About Us</Link></li>
            <li><Link className="dropdown-item" to="/aboutus">Our Team</Link></li>
            <li><Link className="dropdown-item" to="/contactus">Contact Us</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    )
}
export default Navigation;
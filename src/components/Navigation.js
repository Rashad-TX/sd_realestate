import React from "react";
import logo from "../assets/images/logo2.png" ;

const Navigation = () =>{
return(
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={logo} alt="brand-logo" className="logo2"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link px-3 " aria-current="page" href="#" >HOME</a> 
        </li> 
        <li className="nav-item">
          <a className="nav-link px-3" href="#">PROPERTIES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">MAP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" href="#">SELLERS</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle px-3" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR TEAM
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">About Us</a></li>
            <li><a className="dropdown-item" href="#">Our Agents</a></li>
            <li><a className="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    )
}
export default Navigation;
import React from "react"
import logo from "../assets/images/logo2.png" ;
import {Link, Hashlink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';



function Footer() {
	return (

	  <div className="footer">
	  <div className ="footer-img-cntr"><Link className="footer-img" to="/"><img src={logo} alt="brand-logo" className="logo2 "/></Link></div>
	  <div className="footer-cntr1">
		<ul>
			<li>Home</li>
			<li>Featured Properties</li>
			<li>All Properties</li>
		</ul>
	  </div>
	  <div className="footer-cntr2">
		<ul>
			<li>Map</li>
			<li>Sellers</li>
			<li>Contact Us</li>
		</ul>
	  </div>
	  <div className="footer-tm">
	  <p className="footer-text">&copy; SD Moore Group {new Date().getFullYear()}</p>
	  </div>
		  </div>

	 

	
		  
	);
  }
  
  export default Footer;
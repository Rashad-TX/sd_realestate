import React from "react"
import logo from "../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';



function Footer() {
	return (

		<div className="footer">
			<div className="footer-img-cntr"><Link className="footer-img" to="/"><img src={logo} alt="brand-logo" className="logo3 " /></Link></div>
			<div className="footer-cntr1">
				<ul>
					<Link to="/"><li>Home</li></Link>
					<NavHashLink to="/#feat-sec"><li>Featured Properties</li></NavHashLink>
					<Link to="/all"><li>All Properties</li></Link>
				</ul>
			</div>
			<div className="footer-cntr2">
				<ul>
					<Link to="/map"><li> Map</li></Link>
					<Link to="/contactus"><li>Sellers</li></Link>
					<Link to="/contactus"><li>Contact Us</li></Link>
				</ul>
			</div>
			
		</div>





	);
}

export default Footer;
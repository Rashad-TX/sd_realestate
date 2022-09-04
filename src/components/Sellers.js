import React from "react";
import bgpic from "../assets/images/sellerbg2.png";
import mailicon from "../assets/images/mailicon.svg";
import phoneicon from "../assets/images/phoneicon.svg";
import markericon from "../assets/images/markericon.svg";
import Slide from 'react-reveal/Slide';
const Sellers = () => {


    return (
        <div id="sellers-sec" className="sellers-sec">
            <div className="seller-slide-cntr">
                <Slide left>
                    <div className="seller-hdr">
                        <p><span className="seller-contact"> CONTACT</span><br></br> <span className="seller-us">US</span></p>
                    </div>
                </Slide>

                <Slide right>
                    <div id="contact-container">
                        <div className="row">
                            <div className="contact-info p-4 col-12 col-sm-12 col-md-4  align-items-sm-center align-items-md-start ">
                                <h4>Contact Information:</h4>
                                <p>Our team will get back with you within 24 hours.</p>
                                <div className="icon-text">
                                    <img className="seller-contact-icon" src={phoneicon} />
                                    <span>619-555-555</span>
                                </div>
                                <div className="icon-text">
                                    <img className="seller-contact-icon" src={mailicon} />
                                    <span>SellSD@MooreGroup.re</span>
                                </div>
                                <div className="icon-text">
                                    <img className="seller-contact-icon" src={markericon} />
                                    <span>1 Beach, San Diego 92107</span>
                                </div>
                                <div className="social-media">
                                    <a href="#" className="icon-circle">  <img className="icon" /> </a>

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-8">
                                <form>
                                    <div className="row">
                                        <div className="form-group col-12 col-sm-12 col-md-6">
                                            <label>First Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="form-group col-12 col-sm-12 col-md-6">
                                            <label>Last Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-sm-12 col-md-6">
                                            <label>E-Mail</label>
                                            <input type="email" />
                                        </div>
                                        <div className="form-group col-12 col-sm-12 col-md-6">
                                            <label>Phone#</label>
                                            <input type="tel" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12 col-sm-12 col-md-6">
                                            <label>Property You Are Interested In "Buying" or "Selling":</label>
                                            <div id="radio-buttons">
                                                <div className="radio-btn">
                                                    <input type="radio" name="type" id="radiobuying" value="buying" /><label for="radiobuying">Buying</label>
                                                </div>
                                                <div className="radio-btn">
                                                    <input type="radio" name="type" id="radioselling" value="selling" /><label for="radioselling">Selling</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="form-group col-12 col-sm-12 col-md-6">

                                            <label>Street Address</label>
                                            <input type="text" />
                                        </div>
                                        <div className="form-group col-12 col-sm-12 col-md-6">
                                            <label>Zip Code</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-12 col-sm-12 col-md-12">
                                            <label>Message:</label>
                                            <textarea></textarea>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group solo">
                                            <button className="primary">SEND MESSAGE</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>



                    </div>
                </Slide>

            </div>

        </div>


    )
}
export default Sellers;
import React from "react";
import sm from "../assets/images/sebastianmoore.png";
import jm from "../assets/images/joemoore.png";
import stephm from "../assets/images/stephmoore.png";
import nm from "../assets/images/neilmoore.png";
import am from "../assets/images/alimoore.png";
import jom from "../assets/images/JoannaMoore.png";

import kimm from "../assets/images/kimmoore.png";
import aubm from "../assets/images/AubreyMoore.png";
import mm from "../assets/images/marshallmoore.png";
import tm from "../assets/images/tommymoore.png";
import dm from "../assets/images/davemoore.png";
import dom from "../assets/images/DominoeMoore.png";
import rm from "../assets/images/rm2.png";

import Slide from 'react-reveal/Slide';

const Aboutus = () => {


  return (
    <div className="three-containers">
      <div id="aboutus">
        <Slide right> <div className="about-txt-cntr">
          <p className="about-txt"><span className="about-txt1">THE</span><br></br><span className="about-txt2">MOORE</span><br></br><span className="about-txt3">GROUP</span></p>
        </div>
        </Slide>
        <div className="bio-div">
          <p className="team-bio">The Moore Group is a professional real estate brokerage serving buyers and sellers of luxury property in San Diego County. The brokerage is comprised of a close group of talented realtors, led by the firm's President and Founder, Rashad Moore. With more than $1B+ in total sales and $300 million in active listings, the firm closes over one hundred deals annually and has brokered many of the City's largest residential sales, including numerous record-breaking transactions. Located in Downtown San Diego with unrivaled experience and market knowledge. The Moore Group is the preeminent brokerage in San Diego, La Jolla, & Del Mar. </p>
        </div>

      </div>

      <div id="ourteam">
        <Slide left><div className="bioarea"><img src={rm} className="bio-pic2" alt ="boss" />
          <div className="ourteam-txt-cntr">
            <p className="about-txt"><span className="about-txt1">OUR</span><br /><span className="about-txt2">TEAM</span></p>
          </div>
        </div>
        </Slide>
        <div className="team-gallery container">
          <div className="row g-3">
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={stephm} className="team-img" alt="employee1" />
              <div class="middle">
                <div class="name-text">Wardell Moore</div>
              </div>
            </div>
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={kimm} className="team-img" alt="employee2" />
              <div class="middle">
                <div class="name-text">Kimberly Moore</div>
              </div>
            </div>
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={sm} className="team-img"  alt="employee3"/>
              <div class="middle">
                <div class="name-text">Sebastian Moore</div>
              </div>
            </div>
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={jom} className="team-img"  alt="employee4"/>
              <div class="middle">
                <div class="name-text">Magnolia Moore</div>
              </div>
            </div>
            <div className=" abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={jm} className="team-img" alt="employee5" />
              <div class="middle">
                <div class="name-text">Joe Moore</div>
              </div>
            </div>
            <div className=" abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={aubm} className="team-img"  alt="employee6"/>
              <div class="middle">
                <div class="name-text">Aubrey Moore</div>
              </div>
            </div>
            <div className=" abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={nm} className="team-img" alt="employee7" />
              <div class="middle">
                <div class="name-text">Niel D Moore</div>
              </div>
            </div>
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={am} className="team-img" alt="employee8" />
              <div class="middle">
                <div class="name-text">Ali Moore</div>
              </div>
            </div>
            <div className=" abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={tm} className="team-img"  alt="employee9"/>
              <div class="middle">
                <div class="name-text">Tommy Moore</div>
              </div>
            </div>
            <div className=" abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={dm} className="team-img" alt="employee10" />
              <div class="middle">
                <div class="name-text">Dave Moore</div>
              </div>
            </div>
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={dom} className="team-img" alt="employee11" />
              <div class="middle">
                <div class="name-text">Dominoe Moore</div>
              </div>
            </div>
            <div className="abtctnr col col-lg-3 col-md-3 col-sm-6 col-6">
              <img src={mm} className="team-img" alt="employee12" />
              <div class="middle">
                <div class="name-text">Marshall Moore</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
export default Aboutus;
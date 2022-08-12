import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import car1 from "../assets/images/car1.png"
import car2 from "../assets/images/car2.png"
import car3 from "../assets/images/car3.png"
import car4 from "../assets/images/car4.png"
import car5 from "../assets/images/car5.png"
import clogo from "../assets/images/c_logo.png" ;


const Hero =() => {

    return(
        <div>
<Carousel fade controls={false} indicators={false}>

      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100 active"
          src={car1}
          alt="First slide"
        />
        <Carousel.Caption>
          <img src={clogo}  alt="brand logo" className="c-logo"/>
          <div className="hero-btn-cntr"><button className="hero-btn">View Properties</button></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100"
          src={car2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <img src={clogo}  alt="brand logo" className="c-logo"/>
        <div className="hero-btn-cntr"><button className="hero-btn">View Properties</button></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100"
          src={car3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <img src={clogo}  alt="brand logo" className="c-logo"/>
          <div className="hero-btn-cntr"><button className="hero-btn">View Properties</button></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100"
          src={car4}
          alt="First slide"
        />
        <Carousel.Caption>
        <img src={clogo}  alt="brand logo" className="c-logo"/>
        <div className="hero-btn-cntr"><button className="hero-btn">View Properties</button></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100"
          src={car5}
          alt="First slide"
        />
        <Carousel.Caption>
        <img src={clogo}  alt="brand logo" className="c-logo"/>
        <div className="hero-btn-cntr"><button className="hero-btn">View Properties</button></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
    )
}

export default Hero;
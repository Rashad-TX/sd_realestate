import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import car4 from "../assets/images/carnew10.png";
import car1 from "../assets/images/carNew00.png";
import car2 from "../assets/images/carNew1.png";
import car3 from "../assets/images/carNew2.png";
import car5 from "../assets/images/CarNew02.png";
import car6 from "../assets/images/carandbg1.png";
import clogo from "../assets/images/blogonew.png" ;



const Hero =() => {

    return(
        <div>
<Carousel fade controls={false} indicators={false}>

      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100 active"
          src={car3}
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
          src={car1}
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
      
      <Carousel.Item interval={2200}>
        <img
          className="d-block w-100 active"
          src={car6}
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
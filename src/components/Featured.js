import React from "react";
import Bounce from 'react-reveal/Bounce';
import { FeaturedList } from "../helpers/FeaturedList";




const featured = () =>{


const displayFeatured = FeaturedList.map(element => <div className="col-lg-4 featured-map" 
style={{ backgroundImage: `url("${element.mainimg}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }} key={element.id}>
 <div className="fl-cntr" >
 <div className="st-cntr"><p className="featured-st"> {element.street} </p></div>  
 <div className ="price-cntr"><p className="featured-price">{element.price} </p></div>  
 <div className="vd-text">VIEW DETAILS +</div> 
 </div>
 </div>
 )


    return(
        <section className="feat-sec">
         <div className="container">
        <div className = "row">
        <Bounce>
        <div className = "col-lg-4 feature-sq">  <h2><span className="fl-txt">FEATURED</span> <br></br><span className="fl-txt2">LISTINGS</span></h2> <div className ="ft-btn-cntr"><button className="ft-btn">VIEW ALL PROPERTIES</button></div></div>
        </Bounce>
        {displayFeatured }
        <Bounce>
        <div className = "col-lg-4 feature-sq2">  <p className="ft-map-txt">INTERACTIVE MAP </p></div>
        </Bounce>
        </div>
        </div>
        </section>
    )
}

export default featured;
import React from "react";



const FeaturedList = [
    {id: 0,
    street: "5228 Chelsea St",
    city: "La Jolla",
    beds: 5,
    baths: 8,
    sqft: 8878,
    mainimg: './images/5228main.webp' ,   
    price: '$12,995,000' ,          
},
{id: 1,
    street: "6389 Castejon Dr",
    city: "La Jolla",
    beds: 6,
    baths: 9,
    sqft: 11000,
    mainimg: './images/6389main.webp',
    price: '$12,995,000',   
},
{id: 2,
    street: "2681 Idle Hour Ln",
    city: "La Jolla",
    beds: 9,
    baths: 14,
    sqft: 14252,
    mainimg: './images/2681.webp',
    price: '$12,995,000' ,  
},
{id: 3,
    street: "5740 Dolphin Pl",
    city: "La Jolla",
    beds: 4,
    baths: 7,
    sqft: 4851,
    mainimg: './images/5740.webp',
    price: '$12,995,000' ,  
},
{id: 4,
    street: "744 Muirlands Vista Way",
    city: "La Jolla",
    beds: 7,
    baths: 11,
    sqft: 9726,
    mainimg: './images/744.webp',
    price: '$12,995,000' ,  
},
{id: 5,
    street: "6691 Duck Pond Lnl",
    city: "La Jolla",
    beds: 6,
    baths: 9,
    sqft: 15264,
    mainimg: './images/6691.webp',
    price: '$12,995,000'   
},
{id: 6,
    street: "3958 Bayside",
    city: "San Diego",
    beds: 7,
    baths: 7,
    sqft: 4851,
    mainimg: './images/3958.webp',
    price: '$12,995,000' ,  
}


]

const featured = () =>{


const displayFeatured = FeaturedList.map(element => <div className="col-lg-4 featured-map" 
style={{ backgroundImage: `url("${element.mainimg}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}>
 <div className="fl-cntr">
 <div className="st-cntr"><p className="featured-st"> {element.street} </p></div>  
 <div className ="price-cntr"><p className="featured-price">{element.price} </p></div>  
 <div className="vd-text">VIEW DETAILS +</div> 
 </div>
 </div>
 )


    return(
        <section>
         <div className="container">
        <div className = "row">
        <div className = "col-lg-4 feature-sq">  <h2><span className="fl-txt">FEATURED</span> <br></br><span className="fl-txt2">LISTINGS</span></h2> <button>VIEW ALL PROPERTIES</button></div>
        {displayFeatured}
        <div className = "col-lg-4 feature-sq">  <h2><span className="fl-txt">FEATURED</span> <br></br><span className="fl-txt2">LISTINGS</span></h2> <button>VIEW ALL PROPERTIES</button></div>
        </div>
        </div>
        </section>
    )
}

export default featured;
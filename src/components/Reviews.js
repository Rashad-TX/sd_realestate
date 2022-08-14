import React, {useState} from "react";

import back from "../assets/images/back.svg" ;
import next from "../assets/images/next.svg" ;
import revbg from  "../assets/images/revbgjpg.jpg" ;








const Reviews = () => {
    const [cardIndex, setIndex] = useState(0);

    const RevComments = [
        { id: 0,
        image:'./images/cust3.jpg',
        name: "Areal Person",
        comment: "The Moore Group's aggressive marketing and communications skills make them the perfect agents!",
        stars: "./images/5star.png"
},
{ id: 1,
    image: "./images/cust9.jpg",
    name: "Charles Barkley",
    comment: "They were turable...",
    stars: "./images/2stars.png"
},
{ id: 2,
    image:"./images/custdog.jpg",
    name: "Lisa Vanderpump",
    comment: "They helped me buy a dream home for little Jigster. Now he has 15,000 square feet all to himself. Thanks team!",
    stars: "./images/4star.png"
},
{ id: 3,
    image:"./images/jb.jpg",
    name: "Jeff Bezos",
    comment: "They are my Prime-ary agency. See what I did there?",
    stars: "./images/5star.png",
}
    ]


const forward =() =>{ 
    if((cardIndex + 1) > 3) {setIndex(cardIndex -3)}
    else{setIndex(cardIndex + 1)}; }
;
const reverse = () => {
    if((cardIndex - 1) < 0) {setIndex(cardIndex +3 )}
    else {setIndex(cardIndex -1)};
}

    return(
<div className="review-sec">
<div><h2>What Our Customers Are Saying:</h2></div>
<div className="main-card-cntr">
<div className = "header-image">
  <img src={RevComments[cardIndex].image} className="review-img" alt="home buyer"/>
  </div>
  <div className="card-name-comm"><p>{RevComments[cardIndex].name}</p></div>
  <div className = "rev-comments"><p className="com-txt">"{RevComments[cardIndex].comment}"</p></div>
  <div className="stars"><img src={RevComments[cardIndex].stars} className="star-rating" alt="star-rating"/></div>
  <div className="rev-btn-cntr">
<img src={back} alt="back arrow" onClick={reverse} class="back-btn"/>
<img src={next} alt="next arrow" onClick={forward} class="forward-btn"/>
       </div>  
  </div>
      
</div>



     
    )
}
export default Reviews;
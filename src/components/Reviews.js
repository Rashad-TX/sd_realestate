import React, {useState} from "react";

import back from "../assets/images/left.png" ;
import next from "../assets/images/right.png" ;
import revbg from  "../assets/images/revbgjpg.jpg" ;
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';






const Reviews = () => {
    const [cardIndex, setIndex] = useState(0);

    const RevComments = [
        { id: 0,
        image:'./images/cust3.jpg',
        name: "Ayreel Person",
        comment: "Aggressive marketing and perfect agents!!",
        stars: "./images/5star.png"
},
{ id: 1,
    image: "./images/cust9.jpg",
    name: "Charles Barkley",
    comment: "They were turrable...But they had good churros.",
    stars: "./images/2stars.png"
},
{ id: 2,
    image:"./images/cust10.png",
    name: "Lisa Vanderpump",
    comment: "Helped me find Little Jigster his own villa. ",
    stars: "./images/4star.png"
},
{ id: 3,
    image:"./images/cust11.png",
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
<Zoom>
<div className="rev-bg2"><h2><span className="rev-txt-1">WHAT OUR</span><br></br><span className="rev-txt-2"> CLIENTS ARE SAYING</span></h2>
 
  </div>
  </Zoom>
<div className="rev-bg">
<Slide left>
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
  </Slide>

  </div>
      
</div>



     
    )
}
export default Reviews;
import React, {useState} from "react";
import { FeaturedList } from "../helpers/FeaturedList";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";



const FeaturedDisplay = () => {
const [imgPos, setImgPos] =useState(0);



  const previmg = () => {
    if((imgPos - 1) < 0){
        setImgPos((imgPos) =>imgPos = 0)
        console.log("the back imgPos is:" + imgPos)
            } else {
    setImgPos((imgPos) => imgPos - 1)

}
  }

  const nextimg = () => {
    if (imgPos === FeaturedList[0].images.length -1 ) {
      setImgPos((imgPos) => imgPos - imgPos);
   
      console.log("I ran");
    } else {
      setImgPos((imgPos) => imgPos + 1);
      console.log(imgPos);
      console.log(FeaturedList[0].images[imgPos],"Hey");
    }
  };


    return(

<div className="ft-disp-sec" style={{backgroundImage:`url(${FeaturedList[0].images[imgPos]})`,backgroundPosition: 'center',
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "100vh",}}>

<div className="left-btn"><img src={prev} className="ft-disp-prev" onClick={previmg}/></div>
<div className="right-btn"><img src={next} className="ft-disp-next" onClick={nextimg}/></div>

<div className="drawer">
    
</div>
  </div>
    )
}

export default FeaturedDisplay;
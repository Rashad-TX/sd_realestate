import React, {useState} from "react";
import { FeaturedList } from "../helpers/FeaturedList";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";
import bedroom from "../assets/images/bedroom.svg";
import bathroom from "../assets/images/bathroom.svg";
import sqft from "../assets/images/sqft.svg";


const FeaturedDisplay = () => {
const [imgPos, setImgPos] =useState(0);
const [sliderVisibility, setSliderVisibility] = useState('visible');

const contentVisibility = () =>{
  if (sliderVisibility === 'visible'){
  setSliderVisibility((sliderVisibility) => sliderVisibility = 'hidden')}
  else{
    setSliderVisibility((sliderVisibility) => sliderVisibility = 'visible')}
   
}

  const previmg = () => {
    if((imgPos - 1) < 0){
        setImgPos((imgPos) =>imgPos = 0)
                  } else {
    setImgPos((imgPos) => imgPos - 1)

}
  }

  const nextimg = () => {
    if (imgPos === FeaturedList[0].images.length -1 ) {
      setImgPos((imgPos) => imgPos - imgPos);
   
    
    } else {
      setImgPos((imgPos) => imgPos + 1);
    
    }
  };


    return(

<div className="ft-disp-sec" style={{backgroundImage:`url(${FeaturedList[0].images[imgPos]})`,backgroundPosition: 'center',
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "100vh",}}>

<div className="arrow-cntr">
<div className="left-btn"><img src={prev} className="ft-disp-prev" onClick={previmg}/></div>
<div className="right-btn"><img src={next} className="ft-disp-next" onClick={nextimg}/></div>

</div>

<div fd-options-cntr>
<button onClick={contentVisibility} className="show-btn">Show/Hide Details</button><br></br>
<button className="exit-btn">Exit</button>
</div>



<div className="slider-sec" style={{visibility:sliderVisibility}} >
<div className="slider-content">
<div className="slider-st">{FeaturedList[0].street}</div>
<div className="slider-city">{FeaturedList[0].city}</div>
<div className="slider-price">{FeaturedList[0].price}</div>
<div className="slider-bed">{FeaturedList[0].beds}<img src={bedroom} alt="bedroom-img"/> <p>BEDS</p></div>
<div className="slider-bath"> {FeaturedList[0].baths}<img src={bathroom} alt ="bathroom-img"/><p>BATHS</p></div>
<div className="slider-sqft"> {FeaturedList[0].sqft}<img src={sqft} alt ="sqft-img"/><p>SQ FT</p></div>
</div>
</div>

</div>


    )
}

export default FeaturedDisplay;
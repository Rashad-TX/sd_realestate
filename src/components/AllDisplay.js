import React, {useState} from "react";
import { AllPropList } from "../helpers/AllPropList";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";
import bedroom from "../assets/images/bedroom.svg";
import bathroom from "../assets/images/bathroom.svg";
import sqft from "../assets/images/sqft.svg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const AllDisplay = () => {
  const [imgPos, setImgPos] =useState(0);
const [sliderVisibility, setSliderVisibility] = useState('visible');

const { id } = useParams();


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
    if (imgPos === AllPropList[id].images.length -1 ) {
      setImgPos((imgPos) => imgPos - imgPos);
   
    
    } else {
      setImgPos((imgPos) => imgPos + 1);
    console.log(AllPropList[id].images[imgPos])
    }
  };

console.log(AllPropList[id].images[0])

    return(

<div className="ft-disp-sec" style={{backgroundImage:`url(${AllPropList[id].images[imgPos]})`,backgroundPosition: 'center',
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "100vh",}}>


<div className="arrow-cntr">
<div className="left-btn"><img src={prev} className="ft-disp-prev" alt="arrow" onClick={previmg}/></div>
<div className="right-btn"><img src={next} className="ft-disp-next" alt="arrow" onClick={nextimg}/></div>

</div>

<div fd-options-cntr>
<button onClick={contentVisibility} className="show-btn">Details</button><br></br>
<Link to="/"><button className="exit-btn" >Exit</button></Link>
</div>



<div className="slider-sec" style={{visibility:sliderVisibility}} >
<div className="slider-content">
<div className="slider-st">{AllPropList[id].street}</div>
<div className="slider-city">{AllPropList[id].city}</div>
<div className="slider-price">{AllPropList[id].price}</div>
<div className="slider-bed">{AllPropList[id].beds}<img src={bedroom} alt="bedroom-img"/> <p>BEDS</p></div>
<div className="slider-bath"> {AllPropList[id].baths}<img src={bathroom} alt ="bathroom-img"/><p>BATHS</p></div>
<div className="slider-sqft"> {AllPropList[id].sqft}<img src={sqft} alt ="sqft-img"/><p>SQ FT</p></div>
<div><Link to ="/map">View Map</Link></div>
<div><Link to ="/contactus">Contact us about this property</Link></div>
</div>
</div>

</div>


    )
}

export default AllDisplay;
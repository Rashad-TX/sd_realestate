import React, {useState} from "react";
import { FeaturedList } from "../helpers/FeaturedList";
import prev from "../assets/images/prev.png";
import next from "../assets/images/next.png";

const FeaturedDisplay = () => {
const [imgPos, setImgPos] =useState(0)
const ComefromParam = 0;

const testObj=[
    {id:0,
    image:['./images/5228main.webp','./images/3958.webp','./images/6691.webp'],
    },
    {id:1,
        image:['./images/6389main.webp','./images/2681.webp','./images/5740.webp'],
        },
]
  const previmg = () => {
    if((imgPos - 1) < 0){
        setImgPos(imgPos = 0)
    } else {
    setImgPos(imgPos - 1)
}
  }

  const nextimg = () =>{
    if((imgPos + 1) > FeaturedList[0].images.length -1) {
        setImgPos(imgPos = 0)
    } else{
    setImgPos(imgPos + 1)
}
console.log(imgPos);
console.log(testObj[0].image.length);
}

    return(
     
    <div className="ft-disp-sec" style={{backgroundImage:`URL(${FeaturedList[0].images[imgPos]})`,backgroundPosition: 'center',
    backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "100vh",}}>
<div className="ft-disp-arrows">
<img src={prev} className="ft-disp-prev" onClick={previmg}/>
  <img src={next} className="ft-disp-next" onClick={nextimg}/>
  </div>
  </div>
    )
}

export default FeaturedDisplay;
import react  from "react";

import listbox from '../assets/images/listbox.jpg';
import imapbox from '../assets/images/imap.jpg';
import offbox from '../assets/images/offbox.jpg';
import hoodbox from '../assets/images/hoodbox.jpg';
import valbox from '../assets/images/valbox.jpg';
import devbox from '../assets/images/devbox.jpg';

import Zoom from 'react-reveal/Zoom';

const Grid = () => {

    return(
        <div className=" grid container">
           <div className ="row">
               <div className ="col-md-4 boxes box1 card" style={{ backgroundImage: `url("${listbox}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}>  
        <div className="card-img-overlay card-inverse"> 
        <div className="flash-border">
        <h4 className="text-stroke text-white box-text"> LIST WITH US</h4>
        </div>
        </div>
        </div>

        <Zoom>        
        <div className ="col-md-4 boxes box2 card" style={{ backgroundImage: `url("${imapbox}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}> 
        <div className="card-img-overlay card-inverse"> 
        <div className="flash-border">
        <h4 className="text-stroke text-white box-text">MAP</h4>
         </div>
        </div>
        </div>
        </Zoom>
        <div className ="col-md-4 boxes box3 card" style={{ backgroundImage: `url("${offbox}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}> 
        <div className="card-img-overlay card-inverse"> 
        <div className="flash-border">
        <h4 className="text-stroke text-white  box-text"> OUR OFFICES</h4>
        </div>
        </div>
      </div>
      <Zoom>
        <div className ="col-md-4 boxes box4 card" style={{ backgroundImage: `url("${hoodbox}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}> 
        <div className="card-img-overlay card-inverse"> 
        <div className="flash-border">
        <h4 className="text-stroke text-white box-text"> CITY GUIDES</h4>
        </div>
        </div>
         </div>
         </Zoom>
       
        <div className ="col-md-4 boxes box5 card" style={{ backgroundImage: `url("${valbox}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}> 
        <div className="card-img-overlay card-inverse"> 
        <div className="flash-border">
        <h4 className="text-stroke text-white box-text "> APPRAISALS</h4>
        </div>
        </div>
                </div>
         <Zoom>
        <div className ="col-md-4 boxes box6 card"  style={{ backgroundImage: `url("${devbox}")`, backgroundPosition: 'center',  backgroundRepeat: 'no-repeat', height: 300, }}>
        <div className="card-img-overlay card-inverse"> 
        <div className="flash-border">
        <h4 className="text-stroke text-white box-text"> DEVELOPING</h4>
        </div>
        </div>
        </div>
        </Zoom> 
        </div>
        </div>
    )
}

export default Grid;
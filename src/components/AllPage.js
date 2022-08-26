import React, { useState } from "react";
import Bounce from 'react-reveal/Bounce';
import { AllPropList } from "../helpers/AllPropList";
import { useNavigate, Link } from "react-router-dom";
import formbg from "../assets/images/formbg3.png";

const BedroomOptions = [
    1,
    2,
    3,
    4,
    5,
    6
]

const SquareFeetOptions = [
    { min: 2000, max: 3000 },
    { min: 3000, max: 4000 },
    { min: 4000, max: 5000 },
    { min: 5000, max: 6000 },
    { min: 6000 }
]

const AllPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8)
    const [numberOfBedrooms, setNumberOfBedrooms] = useState(undefined)
    const [numberOfBathrooms, setNumberOfBathrooms] = useState(undefined)
    const [squarefeet, setSquarefeet] = useState(undefined)
    const [priceMin, setPriceMin] = useState(0)
    const [priceMax, setPriceMax] = useState(undefined)
    const [sortOrder, setSortOrder] = useState('asc')

    const navigate = useNavigate();

    let properties = AllPropList.slice()
    if (numberOfBedrooms !== undefined) {
        properties = properties.filter(property => property.beds === numberOfBedrooms)
    }
    if (numberOfBathrooms !== undefined) {

    }
    if (squarefeet !== undefined) {
        properties = properties.filter(property => {
            if (property.sqft < squarefeet.min) {
                return false
            }
            if (squarefeet.max) {
                if (property.sqft > squarefeet.max) {
                    return false
                }
            }
            return true
        })
    }
    properties.sort((a, b) => {
        if (sortOrder === 'desc') {
            return parseInt(a.price) - parseInt(b.price)
        } else {
            return parseInt(b.price) - parseInt(a.price)
        }
    })

    const displayAll = properties.map(element => (<div className="col-lg-4 featured-map"
        style={{ backgroundImage: `url("${element.mainimg}")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: 300, }} key={element.id}
        onClick={(event) => { navigate(`/all/${element.id}`) }}>
        <div className="fl-cntr" >
            <div className="st-cntr"><p className="featured-st"> {element.street} </p></div>
            <div className="price-cntr"><p className="featured-price">{element.price} </p></div>
            <div className="vd-text">VIEW DETAILS +</div>
        </div>
    </div>
    )
    )

    return (
        <section className="feat-sec container">
            <div className="forms row" >
                <form className="filter-sec col-lg-12" style={{ backgroundImage: `url(${formbg})`, backgroundRepeat: 'no-repeat', backgroundSize: "100% 100%" }}>
                    <div>
                        <p className="form-cat-title"># Of Bedrooms</p>
                        {BedroomOptions.map((num) =>
                        (<label key={num.toString()}> <input type="radio" value={num.toString()} name="bedrooms" checked={numberOfBedrooms === num} onChange={(event) => {
                            setNumberOfBedrooms(num)
                        }} /> {num === 6 ? "6+" : num} </label>))}

                    </div>
                    <div>
                        <p className="form-cat-title"># Of Bathrooms</p>
                        <label> <input type="checkbox" value="beds" /> 1 </label>
                        <label> <input type="checkbox" value="beds" /> 2 </label>
                        <label> <input type="checkbox" value="beds" /> 3</label>
                        <label> <input type="checkbox" value="beds" /> 4+ </label>
                    </div>
                    <div>
                        <p className="form-cat-title">Square Feet</p>
                        {SquareFeetOptions.map(option =>
                            <label> <input type="checkbox" value={option.min.toString()} checked={squarefeet ? option.min === squarefeet.min : false} onChange={() => setSquarefeet(option)} /> {option.min} {option.max ? " - " + (option.max - 1) : "+"}</label>
                        )}

                    </div>
                    <div>

                        <label> Price<input type="range" value="price" /> $0 - $50,000,000 </label>
                    </div>
                    <div className="sort-sec">Sort Results $:  <input className="asc" type="radio" value="asc" onChange={() => setSortOrder('asc')} checked={sortOrder === 'asc'} />Ascending <input type="radio" className="desc" value="desc" onChange={() => setSortOrder('desc')} checked={sortOrder == 'desc'} /> Descending</div>
                </form>

            </div>
            <div className="container">
                <div className="row">
                    <Bounce>
                        <div className="col-lg-4 feature-sq">  <h2><span className="fl-txt">All ACTIVE</span> <br></br><span className="fl-txt2">LISTINGS</span></h2> </div>
                    </Bounce>
                    {displayAll}
                    <Bounce>
                        <div className="col-lg-4 feature-sq2">  <p className="ft-map-txt">INTERACTIVE MAP </p></div>
                    </Bounce>
                </div>
            </div>
        </section>
    )
}

export default AllPage;
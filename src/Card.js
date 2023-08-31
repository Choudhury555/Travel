import React from "react"

export default function Card(props){
    // console.log(props)
    return(
        <div className="card">
            <img src={`${props.imageUrl}`} />
            <div className="card-data">
                <div className="first">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>{props.location}</p>
                    <a href={`${props.googleMapsUrl}`} target="_blank">View on Google Map</a>
                </div>
                
                    <h1 className="second">{props.title}</h1>
                    <p className="third">{props.startDate} - {props.endDate}</p>                
                    <p className="fourth">{props.description}</p>
            </div>
        </div>
    )
}
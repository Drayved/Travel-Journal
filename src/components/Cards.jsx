import React from "react"
import location from "./images/location.png"


export default function Cards(props){
   
    return(
        <div className="card-container">
            <div className="card">
                <div className="img-container">
                    <img className="card-img" src={props.imageUrl} alt="" width="400px"/>
                </div>
            
                <div className="card-about">
                    <div className="card-locations">
                        <p className="card-location">
                            <img className="location-img" src={location} alt="" /> {props.location.toUpperCase()}
                        </p>
                        <a className="google-maps" href="{props.googleMaps}">View on Google Maps</a>
                    </div>
                    
                    
                    <h1 className="card-title">{props.title}</h1>
                    <h4>{props.startDate} - {props.endDate}</h4>
                    <p className="card-text">{props.description}</p>
                </div>

                
            </div>
        </div>
    )
}

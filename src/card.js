import React from "react";
import redheart from "./images/likes.png";

export default function Card(props){
    return (
        <div className="card">
            <img src={props.pictureURL} alt={props.title} class="housepicture"/>
            <h3>{props.title}</h3> 
            <div class="redheartdiv">
                <span><img src={redheart} alt="Heart" class="heartimage"/>{props.stars}</span>
            </div>
            <p><text>{props.cost}</text></p>
            <p>
                {props.description}
            </p>
        </div>
    );
}

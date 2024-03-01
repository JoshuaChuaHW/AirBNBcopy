import React from "react";
import picture1 from "./images/picture1.png";
import picture2 from "./images/picture2.jpg";
import picture4 from "./images/picture4.jpg";
import picture5 from "./images/picture5.jpg";
import picture6 from "./images/picture6.jpg";
import picture7 from "./images/picture7.jpg";
import picture8 from "./images/picture8.jpg";
import picture9 from "./images/picture9.jpeg";
import picture10 from "./images/picture10.jpg"
import girl1 from "./images/girl1.jpg"




export default function Hero(){

    return(
        <div class="hero">
            <div class="pictures">

                <div class="column1">

                    <img src={picture1} alt=""></img>
                    <img src={girl1} alt=""></img>

                </div>

                <div class="column2">

                    <img src={picture2} alt=""></img>
                    <img src={picture4} alt=""></img>
                    <img src={picture5} alt=""></img>

                </div>

                <div class="column3">

                    <img src={picture6} alt=""></img>
                    <img src={picture7} alt=""></img>
                    <img src={picture8} alt=""></img>

                </div>

                <div class="column4">

                    <img src={picture9} alt=""></img>
                    <img src={picture10} alt =""></img>
                    

                </div>

            </div>
            <h1 class="HeroText">
                Pay Small. Live Big
            </h1>
            <button type="button" class="BookNowButton"> Book Now</button>


        </div>
    )
}
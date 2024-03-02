import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"
import NavigationBar from "./navigationbar"
import Hero from "./hero"
import Experience from "./experiences"
ReactDOM.render(
    <div class="main">

        <NavigationBar/>
        <Hero/>
        <Experience/>

    </div>,
    
    document.getElementById("root")
)
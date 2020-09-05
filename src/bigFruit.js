import React from 'react'
import './App.css'

function BigFruit(props){
    return(
        <div>
    <div class="animate__animated animate__fadeIn">
        <img src={props.fruit.image} id='bigfruititem'/>
    </div>
    <div>
        <p id="fact1" class=" animate__animated animate__backInLeft animate__faster">{props.fruit.fact1}</p>
        <p id='fact2' class="animate__animated animate__backInRight animate__faster">{props.fruit.fact2}</p>
        <p id='fact3' class="animate__animated animate__backInUp animate__faster">{props.fruit.fact3}</p>
    </div>
    </div>
    )
}

export default BigFruit
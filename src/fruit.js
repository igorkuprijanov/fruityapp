import React from "react"
import {Transition, animated} from 'react-spring'

function Fruit(props){
    return(
    <div class={props.entrance}>
        <p>{props.fruit.name.toUpperCase()}</p>
    </div>
    )
}

export default Fruit
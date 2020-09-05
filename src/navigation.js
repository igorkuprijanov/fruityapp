import React from 'react'
import './App.css'
import { FaArrowLeft } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa';
import { IconContext } from "react-icons";
import fruitData from './fruitData.js'
import Fruit from './fruit.js'
import BigFruit from './bigFruit.js'
import {Transition, animated} from 'react-spring/renderprops'



class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fruits: fruitData.filter((fruit) => fruit.active).map((fruit) => <Fruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active} entrance={"animate__fadeIn animate__animated  animate__faster"}/>),
            bigfruit: fruitData.filter((fruit) => fruit.active).map((fruit) => <BigFruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active}/>),
            update: this.props.update
        }
        this.rightClick = this.rightClick.bind(this)
        this.leftClick = this.leftClick.bind(this)
        this.getId = this.getId.bind(this)
    }
        
    getId(){
        for(let i = 0; i<fruitData.length; i++){
            if(fruitData[i].active === true){
                return fruitData[i].id
            }
        }
    }
    
    componentDidUpdate(prevProps) {
  if (prevProps.update !== this.props.update) {
    console.log('needs to update')
      console.log(this.props.update)
     
      this.setState({
          fruits: fruitData.filter((fruit) => fruit.active).map((fruit) => <Fruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active} entrance={"animate__lightSpeedInRight animate__animated  animate__faster"}/>),
            bigfruit: fruitData.filter((fruit) => fruit.active).map((fruit) => <BigFruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active}/>),
          update: this.props.update
      },  ()=>{console.log(this.state)})
  }
}

                                  
    rightClick(){
        
        let currentPosition = this.getId()
        fruitData[currentPosition].active = false
        if(parseInt(currentPosition) === fruitData.length-1){
            fruitData[0].active = true
        }else{
             fruitData[parseInt(currentPosition) + 1].active = true
        }
        this.setState({
            fruits: fruitData.filter((fruit) => fruit.active).map((fruit) => <Fruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active} entrance={"animate__lightSpeedInRight animate__animated  animate__faster"}/>),
            bigfruit: fruitData.filter((fruit) => fruit.active).map((fruit) => <BigFruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active}/>)
                                                                  
        }) 
        }
 
    leftClick(){
        let currentPosition = this.getId()
        fruitData[currentPosition].active = false
        if(parseInt(currentPosition) === 0){
            fruitData[fruitData.length -1].active = true
        }else{
            fruitData[parseInt(currentPosition) - 1].active = true
        }
        this.setState({
            fruits: fruitData.filter((fruit) => fruit.active).map((fruit) => <Fruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active} entrance={"animate__lightSpeedInLeft animate__animated  animate__faster"}/>),
            bigfruit: fruitData.filter((fruit) => fruit.active).map((fruit) => <BigFruit fruit={fruit} key = {fruit.id} name={fruit.name} image = {fruit.image} active={fruit.active}/>)
        })
    }
    
    render(){
    return(
    <div id="navigationmain">
    <div id="fruititem">
      
       {this.state.bigfruit} 
    </div>
    <div id='navigationbar'>
    <IconContext.Provider value={{ className: 'react-icons', size:"1.7rem" }}>
     <FaArrowLeft onClick = {this.leftClick}/>
       {this.state.fruits}
     <FaArrowRight onClick={this.rightClick}/>
     </IconContext.Provider>
     </div>
    </div>
    )
    }
}

export default Navigation
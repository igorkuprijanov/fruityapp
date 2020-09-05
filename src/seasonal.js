import React from 'react'
import './App.css'
import chestnut from './assets/chestnut.svg'
import grapefruit from './assets/grapefruit.svg'
import lemon from './assets/lemon.svg'
import orange from './assets/orange.svg'
import tangerine from './assets/tangerine.svg'
import kale from './assets/kale.svg'
import turnip from './assets/turnip.svg'
import apricots from './assets/apricot.svg'
import avocado from './assets/avocado.svg'
import mango from './assets/mango.svg'
import pineapple from './assets/pineapple.svg'
import rhubarb from './assets/rhubarb.svg'
import strawberry from './assets/strawberry.svg'
import aspharagus from './assets/asparagus.svg'
import banana from './assets/banana.svg'
import radish from './assets/radish.svg'
import blackberries from './assets/blackberry.svg'
import blueberry from './assets/blueberry.svg'
import nectarine from './assets/nectarine.svg'
import peach from './assets/peach.svg'
import rasberry from './assets/rasberry.svg'
import watermelon from './assets/watermelon.svg'
import lime from './assets/lime.svg'
import apple from './assets/apple.svg'
import cranberries from './assets/cranberry.svg'
import fig from './assets/fig.svg'
import grapes from './assets/grape.svg'
import pomegranate from './assets/pomegranate.svg'
import potato from './assets/potato.svg'
import quince from './assets/quince.svg'
import sweetpotato from './assets/sweet-potato.svg'
import plum from './assets/plum.svg'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Navigation from './navigation.js'
import fruitData from './fruitData.js'
import { Redirect } from 'react-router-dom'


class Seasonal extends React.Component{
    constructor(){
        super()
        this.state ={
            selected: "Chestnut",
            redirect: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e){
        this.setState({
            selected: e.target.innerText,
            redirect: true
        }, ()=>{
            for(let i = 0; i<fruitData.length; i++){
            if(fruitData[i].name === this.state.selected){
                fruitData[i].active = true
            }else{
                fruitData[i].active = false
            }
        }})}
    
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
    
    render(){
    return(
   <div id='seasonalpage' class="animate__fadeIn animate__animated animate__faster">
      <h1 id='seasonalheading'>To determine the best time to buy certain fruits and vegetables, it's best to know the peak seasons for each type.</h1>
      <div id="seasonalcontainer">
       <div>
           <h2>Winter season</h2>
           <ul>
        {this.renderRedirect()}
               <li className='linkItem' onClick={this.handleClick}>Chestnuts<img src={chestnut} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Grapefruit<img src={grapefruit} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Lemon<img src={lemon} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Oranges<img src={orange} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Tangerines<img src={tangerine} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Kale<img src={kale} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Turnips<img src={turnip} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Radishes<img src={radish} class='icons'/></li>
           </ul>
       </div>
       <div>
           <h2>Spring season</h2>
           <ul>
               <li className='linkItem' onClick={this.handleClick}>Apricots<img src={apricots} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Avocado<img src={avocado} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Mango<img src={mango} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Pineapple<img src={pineapple} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Rhubarb<img src={rhubarb} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Strawberries<img src={strawberry} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Asparagus<img src={aspharagus} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Banana<img src={banana} class='icons'/></li>
           </ul>
       </div>
       <div>
           <h2>Summer season</h2>
           <ul>
               <li className='linkItem' onClick={this.handleClick}>Blackberries<img src={blackberries} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Blueberries<img src={blueberry} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Nectarines<img src={nectarine} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Peaches<img src={peach} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Plums<img src={plum} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Raspberries<img src={rasberry} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Watermelon<img src={watermelon} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Lime<img src={lime} class='icons'/></li>
           </ul>
       </div>
       <div>
           <h2>Fall season</h2>
           <ul>
               <li className='linkItem' onClick={this.handleClick}>Apples<img src={apple} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Cranberries<img src={cranberries} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Figs<img src={fig} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Grapes<img src={grapes} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Pomegranate<img src={pomegranate} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Potatoes<img src={potato} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Quince<img src={quince} class='icons'/></li>
               <li className='linkItem' onClick={this.handleClick}>Sweet Potatoes<img src={sweetpotato} class='icons'/></li>
           </ul>
       </div>
       </div>
   </div>
    )
    }
}

export default Seasonal
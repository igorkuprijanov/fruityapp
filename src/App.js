import './App.css';
import React from 'react';
import logo from "./assets/logo.ico";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";
import fruitData from './fruitData.js';
import Navigation from './navigation.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './about.js'
import Seasonal from './seasonal.js'
import DataListInput from 'react-datalist-input';
import { useHistory } from 'react-router'

import { Redirect } from 'react-router-dom'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            selected: '',
            redirect: false,
            needsToUpdate: false
        }  
    }
    
    matchCurrentInput = (currentInput, item) => {
    return (item.label.substr(0, currentInput.length).toUpperCase() === currentInput.toUpperCase());
    }
     
    onSelect = (selectedItem) => {
   console.log(selectedItem);
    this.setState({
            selected: selectedItem.label,
            redirect: true,
            
        }, ()=>{
            for(let i = 0; i<fruitData.length; i++){
            if(fruitData[i].name === this.state.selected){
                fruitData[i].active = true
            }else{
                fruitData[i].active = false
            }
        }
            this.setState({
        needsToUpdate: true,
        selected: ''
    })
    })
    
    }

  renderRedirect = () => {
    if (this.state.redirect && window.location.pathname !== '/') {
       return <Redirect to='/' />
  }
  }
  
  
  onDropdownOpen = () =>{
      this.setState({
          redirect: false,
          needsToUpdate: false
      })}
    
  render(){    
       const items = fruitData.map((item, i) => {
        return {
            label: item.name,
            key: item.id,   
        }
    });
  return (
    <div className = "App">
    <Router>
    <div id="top">
        <img alt='logo' src={logo}></img>
        <h2 id='logotxt'>Fruity</h2>
        {this.renderRedirect()}
        <div id='search'>
       <DataListInput 
                placeholder={"Search"}
                items={items}
                onSelect={this.onSelect}
                match={this.matchCurrentInput}
                dropDownLength={5}
                inputClassName="searchBar"
                requiredInputLength={1}
                onDropdownOpen={this.onDropdownOpen}
                clearInputOnSelect={true}
                suppressReselect ={false}
            />
            </div>
    </div>
    <div id="navigation">
        <Link to='/'>Home</Link>
        <Link to='/seasonal'>Seasonal</Link>
        <Link to='/about'>About</Link>
    </div>
    <Switch>
            <Route path='/seasonal'>
                <Seasonal/>
            </Route>
            <Route path ='/about'>
                <About/>
            </Route>
            <Route path='/'>
                <Navigation  update={this.state.needsToUpdate}/>
            </Route>
        </Switch>
    </Router>
    <div id="media">
    <IconContext.Provider value={{ className: 'react-icons', size:"2em" }}>
   <FaFacebookSquare id="facebookicon" onClick={()=> window.open("https://facebook.com", "_blank")}/>
       <FaTwitterSquare id="twittericon" onClick={()=> window.open("https://twitter.com", "_blank")}/>
       <FaInstagramSquare id="instagramicon" onClick={()=> window.open("https://instagram.com", "_blank")}/>
        </IconContext.Provider>
    </div>
    
    </div>
  );
}
}

export default App;

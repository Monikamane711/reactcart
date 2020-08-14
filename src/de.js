import React, { Component } from 'react';
//import data from "./data"; 
//import {Card} from "react-bootstrap";
import "./style.css";

class de extends Component {
  constructor() {
    super();
    this.state={
        
    }
}


render() {
    return (
     
      <div className="head">
        <div >
          <div className="fi">
        <div className="filt">
        
        <div className="fil"> Filters</div>
        </div>
        </div>
        </div>
        
        <div className="fi">
        <div className="cuisine">Cuisines: </div>
        <div style={{display:'flex',flexWrap:'wrap'}}>
          
        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">Cafe</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>
        

        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">Beverage</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>

        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">SouthIndian</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>

        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">NorthIndian</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>


        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">Chinese</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>

        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">Fast</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>

        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">Bakery</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>

        <label className="lb2">
          <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
        <div className="ca">Pizzas</div>
       
        <div className="di">
         
        <label className="lbl1">
          <input type="checkbox" name="cuisine" value="Cafe"></input>
        </label>
        </div>
        
        </div>
        </label>
       </div>
        
      </div>
     

      <div className="fi">
      <div className="cuisine">Sort By Cost: </div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        
      <label className="lb2">
        <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
      <div className="ca">Low to High</div>
     
      <div className="di">
       
      <label className="lbl1">
        <input type="checkbox" name="cuisine" value="Cafe"></input>
      </label>
      </div>
      
      </div>
      </label>

      <label className="lb2">
        <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
      <div className="ca"> High to low </div>
     
      <div className="di">
       
      <label className="lbl1">
        <input type="checkbox" name="cuisine" value="Cafe"></input>
      </label>
      </div>
      
      </div>
      </label>

      </div>

      </div>

      <div className="fi">
      <div className="cuisine">Choice: </div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
        
      <label className="lb2">
        <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
      <div className="ca">Veg</div>
     
      <div className="di">
       
      <label className="lbl1">
        <input type="checkbox" name="cuisine" value="veg"></input>
      </label>
      </div>
      
      </div>
      </label>

      <label className="lb2">
        <div style={{display:'flex',justifyContent:'flex-end',flexDirection:'row-reverse'}}>
      <div className="ca"> Non-veg </div>
     
      <div className="di">
       
      <label className="lbl1">
        <input type="checkbox" name="cuisine" value="non-veg"></input>
      </label>
      </div>
      
      </div>
      </label>
      
      


      </div>

      </div>
     
      </div>
      );
    }
      

  }



  

             
 
export default de; 

    


 

import React, { Component } from 'react';
//import './App.css';
import Information from "./data"; 
import {Card} from "react-bootstrap";

class deeee extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh',
      display:'float',
      float:'right'
      
    }
    const items = Information.filter((data) => {
      if(this.state.search == null)
          return data
      else if(data.loc.toLowerCase().includes(this.state.check.toLowerCase()) || data.loc.toLowerCase().includes(this.state.check.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
        <Card className="box" style={{width:'50rem'}} border="success" text="info">
        <Card.Img variant="top" src={data.img}/>
        <Card.Body className="card-body" >
        <Card.Title style={{fontSize:'15px'}}>{data.name}</Card.Title>
        <Card.Subtitle style={{fontSize:'11px'}}>{data.cuisine_type}</Card.Subtitle>
        <Card.Text className="card-text" style={{fontSize:'11px'}}>
         {data.loc}
         </Card.Text>
         <Card.Footer style={{fontSize:'13px'}} className="card-footer">*{data.rating}     .     {data.time}     .      {data.cost}</Card.Footer>

        </Card.Body>
        </Card>
       
      )
    })

    return (
      <div>
      <input type="checkbox" placeholder="Enter item to be searched" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
    )
  }
}

export default deeee;
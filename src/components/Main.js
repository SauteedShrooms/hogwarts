import React, { Component } from "react";
import FrontCard from "./FrontCard"



class Main extends Component {

  getHogsData = () => this.props.data.map(hog => <FrontCard hog={hog} />)

  render() {
    
    return (
      <div className="Main ui grid container">
        {this.getHogsData()}
        
      </div>
    );
  }
}

export default Main;
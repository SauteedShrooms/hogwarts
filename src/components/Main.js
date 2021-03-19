import React, { Component } from "react";
import Card from "./Card"



class Main extends Component {

  getHogsData = () => this.props.data.map(hog => <Card hog={hog} />)

  render() {
    
    return (
      <div className="Main ui grid container">
        {this.getHogsData()}
        
      </div>
    );
  }
}

export default Main;
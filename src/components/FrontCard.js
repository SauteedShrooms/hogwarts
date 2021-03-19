import React, { Component } from "react";
 


class FrontCard extends Component {

  hogName = this.props.hog.name
  hogSpecialty = this.props.hog.specialty

  pigImage = require(`../hog-imgs/${this.hogName.toLowerCase().split(" ").join("_")}.jpg`)
  
  render() {
    return (
      <div className="card pigTile ui four wide column">
        <div className="image">
          <img src={`${this.pigImage}`}/>
        </div>
        {this.hogName}
        {this.hogSpecialty}
      </div>
    );
  }
}

export default FrontCard;
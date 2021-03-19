import React, { Component } from "react";
 

class FrontCard extends Component {

  hogName = this.props.hog.name
  hogSpecialty = this.props.hog.specialty

  pigImage = require(`../hog-imgs/${this.hogName.toLowerCase().split(" ").join("_")}.jpg`)
  
  render() {
    return (
      <div className="card pigTile ui five wide column">
        {this.hogName}
        <div className="image">
          <img src={`${this.pigImage}`}/>
        </div>
      </div>
    );
  }
}

export default FrontCard;
import React, { Component } from "react";
 



class Card extends Component {

  hogName = this.props.hog.name

  render() {
    return (
      <div className="Card">
        {this.hogName}
        {this.hogSpecialty}
      </div>
    );
  }
}

export default Card;
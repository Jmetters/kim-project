import React from "react";


class Card extends React.Component {
  render() {


    return (
      
     <div className="scene">
  <div className="card">
    <div className="card__face card__face--front" >{this.props.name}</div>
    <div className="card__face card__face--back">back</div>
  </div>
</div>
  );
}
}

export default Card;

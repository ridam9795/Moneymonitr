import React from "react";

function TrackCard(props) {
  return (
    <div className="item">
      {props.category} price: {props.amount}
      {props.currency} {props.date.getDate()}
      {props.date.getMonth()}
    </div>
  );
}

export default TrackCard;

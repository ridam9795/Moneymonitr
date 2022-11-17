import React from "react";
import "./css/Trackcard.css";
function TrackCard(props) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="item">
      <div className="content">
        <h4 className="card-header">{props.category.toUpperCase()}</h4>
        <h4 className="card-body">
          {" "}
          {props.amount} {props.currency == "inr" ? "₹" : "$"}
        </h4>
      </div>

      <div>
        <p className="card-footer">
          Created on - {props.date.getDate()}, {months[props.date.getMonth()]}{" "}
          {props.date.getFullYear()}
        </p>
      </div>
    </div>
  );
}

export default TrackCard;

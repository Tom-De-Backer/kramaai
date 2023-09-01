import React from "react";
import "../styles/CalendarItem.css";

const CalendarItem = (props) => {
  return (
    <div className="box">
      <div className="date">{props.date}</div>
      <div>{props.event}</div>
    </div>
  );
};

export default CalendarItem;

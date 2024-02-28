import React from "react";
import "../styles/CalendarItem.css";

const CalendarItem = (props) => {
  return (
    <div className="box">
      <div className="event">{props.event}</div>
	  <div>{props.date}</div>
    </div>
  );
};

export default CalendarItem;

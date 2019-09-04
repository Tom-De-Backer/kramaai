import React from "react";

import "../styles/NewsItem.css";

const NewsItem = props => {
  return (
    <div className="newsBox">
      <h2 className="titleNews">{props.title}</h2>
      {props.imageUrl !== " " && <img src={props.imageUrl} alt="NewsImage" />}
      <p>{props.text}</p>
    </div>
  );
};

export default NewsItem;

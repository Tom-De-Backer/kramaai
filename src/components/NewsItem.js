import React from "react";

import "../styles/NewsItem.css";

const NewsItem = props => {
  return (
    <div className="newsBox">
      <h2 className="titleNews">{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
      {props.imageUrl !== " " && (
        <img src={props.imageUrl} alt="NewsImage" className="newsImg" />
      )}
    </div>
  );
};

export default NewsItem;

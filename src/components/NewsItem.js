import React from "react";

import "../styles/NewsItem.css";

function getImg(props) {
	if (props.imageUrl && props.imageUrl !== " ") return (<img src={props.imageUrl} alt="NewsImage" className="newsImg" />)
	else return (<br/>)
}

const NewsItem = props => {
  let img = ""
	if (props.imageLink) img = (<a href={props.imageLink}>{getImg(props)}</a>)
	else img = getImg(props)

  return (
    <div className="newsBox">
      <h2 className="titleNews">{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.text }} />
			{img}
    </div>
  );
};

export default NewsItem;

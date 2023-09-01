import React from "react";

import "../styles/NewsItem.css";

function getImg(props) {
    if (props.imageUrl && props.imageUrl !== " ")
        return <img src={props.imageUrl} alt="NewsImage" className="newsImg" />;
    else return <br />;
}

const NewsItem = (props) => {
    let img = "";
    if (props.imageLink) img = <a href={props.imageLink}>{getImg(props)}</a>;
    else img = getImg(props);

    return (
        <div className="newsBox">
            <h2 className="titleNews">{props.title}</h2>

            <p
                style={
                    ({ padding_left: 10 + "px" },
                    { padding_right: 20 + "px" },
                    { padding_bottom: 20 + "px" },
                    { padding_top: 20 + "px" },
                    { font_size: 1.17 + "em" })
                }
                dangerouslySetInnerHTML={{ __html: props.text }}
            />
            {img}
        </div>
    );
};

export default NewsItem;

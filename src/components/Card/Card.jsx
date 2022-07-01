import React from "react";
import "./Card.css";

export const Card = (props) => {
  const { title, description, url, time, content } = props;
  return (
    <div className='cardContainer'>
      <div className='cardHeader'>
        <span>{title}</span>
      </div>
      <hr />
      <div className='cardBody'>
        <div className='cardText'>
          <p>{description}</p>
          <p>{content}</p>
        </div>
        <div className='cardFooter'>
          <div className='cardFooterFirstSection'>
            <a className='cardLink' href={url}>
              Read story
            </a>
            <span className='cardBookmarkText'>Add to bookmarks</span>
          </div>
          <span className='cardTime'>{time}</span>
        </div>
      </div>
    </div>
  );
};

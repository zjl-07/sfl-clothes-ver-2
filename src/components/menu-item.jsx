import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="sub-title">SHOP NOW!</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

import React, { PropTypes } from 'react';

const FontAwesomeIcon = ({icon, iconSize, color}) => {
  return (
    <i className={icon + " " + iconSize + " " + color}></i>
  );
}

export default FontAwesomeIcon;
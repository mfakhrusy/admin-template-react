import React, { PropTypes } from 'react';

const FontAwesomeIcon = ({icon, iconSize}) => {
  return (
    <i className={icon + " " + iconSize}></i>
  );
}

export default FontAwesomeIcon;
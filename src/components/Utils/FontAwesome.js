import React from 'react';

const FontAwesomeIcon = ({icon, size}) => {
  if (size == undefined) {
    size = "fa-1x";
  }
  return (
    <i className={icon + " " + size}></i>
  );
}

const FaClipboard = ({size}) => {
  return (
    <FontAwesomeIcon icon={"far fa-clipboard"} size={size}/>
  );
}

const FaComments = ({size}) => {
  return (
    <FontAwesomeIcon icon={"fas fa-comments"} size={size}/>
  );
}

const FaChartPie = ({size}) => {
  return (
    <FontAwesomeIcon icon={"fas fa-chart-pie"} size={size}/>
  );
}

const FaListUl = ({size}) => {
  return (
    <FontAwesomeIcon icon={"fas fa-list-ul"} size={size}/>
  );
}

const FaBell = ({size}) => {
  return (
    <FontAwesomeIcon icon={"fas fa-bell"} size={size} />
  );
}

export { FaClipboard, FaComments, FaChartPie, FaListUl, FaBell };
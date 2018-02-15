import React, { Component, PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import { FaClipboard, FaComments, FaChartPie, FaListUl, FaBell } from '../Utils/FontAwesome';

const FilterItem = ({filterItemClass, active, onClick}) => {
  if (active) {
    return (
      <div className={"filter-item " + filterItemClass}>

      </div>
    )
  }
  
  return (
    <a href="#">
      <div className={"filter-item " + filterItemClass}>

      </div>
    </a>
  )
}

const FilterMainboard = ({active, onClick}) => {
  return (
    {/* <div className="filter-mainboard filter-item"> */}
      <FilterItem filterItemClass="filter-mainboard" active={active} onClick={onClick}>
        <FaClipboard />
      </FilterItem>
    {/* </div> */}
  );
}

const FilterChat = () => {
  return (
    <div className="filter-chat filter-item">
      <FaComments />
    </div>
  );
}

const FilterStatistics = () => {
  return (
    <div className="filter-statistics filter-item">
      <FaChartPie />
    </div>
  );
}

const FilterNotification = () => {
  return (
    <div className="filter-notification filter-item">
      <FaListUl />
    </div>
  );
}

const FilterAlert = () => {
  return (
    <div className="filter-alert filter-item">
      <FaBell />
    </div>
  );
}

// redux things
const mapStateToProps = (state, ownProps) => {
  return (
    
  )
}


class SidebarFilter extends Component {
  render() {
    return (
      <div className="sidebar-filter">
        <FilterMainboard />
        <FilterChat />
        <FilterStatistics />
        <FilterNotification />
        <FilterAlert />
      </div>
    );
  }
}

export default SidebarFilter;
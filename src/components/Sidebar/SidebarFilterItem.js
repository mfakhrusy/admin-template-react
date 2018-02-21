import React from 'react';
import { FaClipboard, FaComments, FaChartPie, FaListUl, FaBell } from '../Utils/FontAwesome';
import { setSidebarFilter } from '../../actions/sidebarActions';


export const FilterItem = ({children, filterItemClass, active, onClick}) => {
  return (
    <a href="#" onClick={e => {e.preventDefault(); onClick();}}>
      <div className={"filter-item " + filterItemClass}>
        {children}
      </div>
    </a>
  )
}

export const FilterMainboard = ({active, onClick}) => {
  return (
    <FilterItem filterItemClass="filter-mainboard" active={active} onClick={onClick}>
      <FaClipboard />
    </FilterItem>
  );
}

export const FilterChat = ({active, onClick}) => {
  return (
    <FilterItem filterItemClass="filter-chat" active={active} onClick={onClick}>
      <FaComments />
    </FilterItem>
  );
}

export const FilterStatistics = ({active, onClick}) => {
  return (
    <FilterItem filterItemClass="filter-statistics" active={active} onClick={onClick}>
      <FaChartPie />
    </FilterItem>
  );
}

export const FilterNotification = ({active, onClick}) => {
  return (
    <FilterItem filterItemClass="filter-notification" active={active} onClick={onClick}>
      <FaListUl />
    </FilterItem>
  );
}

export const FilterAlert = ({active, onClick}) => {
  return (
    <FilterItem filterItemClass="filter-alert" active={active} onClick={onClick}>
      <FaBell />
    </FilterItem>
  );
}
import React from 'react';
import FontAwesomeIcon from '../Utils/FontAwesomeIcon';

const FilterItem = ({icon, iconSize, onClick, filterItemClass}) => (
  <a href="#" onClick={e => {e.preventDefault(); onClick();}}>
    <div className={"filter-item " + filterItemClass}>
      <FontAwesomeIcon icon={icon} iconSize={iconSize} />
    </div>
  </a>
);

export default FilterItem;
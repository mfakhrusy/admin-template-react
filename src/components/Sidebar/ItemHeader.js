import React from 'react';

const ItemHeader = ({children}) => {
  return (
    <h3 className="sidebar-item-header">
      {children}
    </h3>
  );
}

export default ItemHeader;
import React from 'react';
import { connect } from 'react-redux';
import PageList from '../../components/Sidebar/Mainboard/PageList';


const getVisiblePageList = (pageItems, searchText) => {

  // clone pageItems
  // we need to clone the object (by value) because javascript will pass object property by reference, so our data will change
  let pageItemsClone = JSON.parse(JSON.stringify(pageItems)); // deep clone state to newState


  if (searchText === "") {
    return pageItems;
  }

  let newPageItems = pageItemsClone.filter((item) => {

    if (!item.hasDropdown) {
      return (
        item.label.indexOf(searchText) !== -1        
      )
    } else {
      const newDropdownItems = item.dropdownItems.filter((dropdownItem) => {
        return (
          dropdownItem.label.indexOf(searchText) !== -1
        );
      });

      item.dropdownItems = newDropdownItems;
      if (item.dropdownItems.length > 0) {
        return true;
      } else {
        return (
          item.label.indexOf(searchText) !== -1        
        )
      }
    }

    return false;
  });

  return newPageItems;
}

const mapStateToProps = (state) => {
  return {
    pageItems: getVisiblePageList(state.pageItems, state.searchText),
    searchText: state.searchText
  };
}

const ContainerPageList = connect(
  mapStateToProps,
)(PageList);

export default ContainerPageList;
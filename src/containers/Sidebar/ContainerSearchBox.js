import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../../components/Sidebar/Mainboard/SearchBox';
import { searchSidebarMainboard } from '../../actions/sidebarActions';

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      dispatch(searchSidebarMainboard(value));
    }
  }
}


const ContainerSearchBox = connect(mapStateToProps, mapDispatchToProps)(SearchBox);

export default ContainerSearchBox;
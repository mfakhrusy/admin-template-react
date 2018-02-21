import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../../../components/Sidebar/Mainboard/SearchForm';
import { searchSidebarMainboard } from '../../../actions/sidebarActions';

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      // change the filter's state to whatever props it has with ownProps
      dispatch(searchSidebarMainboard(value));
    }
  }
}


const ContainerSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default ContainerSearchForm;
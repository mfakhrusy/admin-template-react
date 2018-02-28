import React from 'react';
import { connect } from 'react-redux';
import FilterItem from '../../components/Sidebar/FilterItem';
import { setSidebarFilter } from '../../actions/sidebarActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSidebarFilter(ownProps.filter));
    }
  };
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter == ownProps.filter
  };
}

const ContainerFilterItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterItem);

export default ContainerFilterItem;
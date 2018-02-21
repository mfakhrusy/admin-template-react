import React from 'react';
import { connect } from 'react-redux';
import { FilterMainboard, FilterChat, FilterNotification, FilterStatistics, FilterAlert } from '../components/Sidebar/SidebarFilterItem';
import { setSidebarFilter } from '../actions/sidebarActions';

const mapStateToProps = (state, ownProps) => {
  return {
    // the filter state is checked with own props of the clicked button, if it's the same, then active is true
    active: ownProps.filter === state.showFilter
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      // change the filter's state to whatever props it has with ownProps
      dispatch(setSidebarFilter(ownProps.filter));
    }
  }
}

// container component with connect from redux
export const ContainerFilterMainboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMainboard);

export const ContainerFilterChat = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterChat);

export const ContainerFilterStatistics = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterStatistics);

export const ContainerFilterNotification = connect(
  
  mapStateToProps,
  mapDispatchToProps
)(FilterNotification);

export const ContainerFilterAlert = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterAlert);

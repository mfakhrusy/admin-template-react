import React from 'react';
import { connect } from 'react-redux';
import PageListItem from '../../components/Sidebar/Mainboard/PageListItem';


const mapStateToProps = (state, ownProps) => {
  return {
    active: state.showPage == ownProps.showPage
  };
}

const ContainerPageListItem = connect(
  mapStateToProps,
)(PageListItem);


export default ContainerPageListItem;
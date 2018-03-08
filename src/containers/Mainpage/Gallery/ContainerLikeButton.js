import React from 'react';
import { connect } from 'react-redux';
import LikeButton from '../../../components/Mainpage/Gallery/LikeButton';


const mapStateToProps = (state) => {
  return {
    color: state.pageColor,
  };
}

const ContainerLikeButton = connect(
  mapStateToProps,
)(LikeButton);

export default ContainerLikeButton;
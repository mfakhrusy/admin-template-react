import React from 'react';
import { connect } from 'react-redux';
import LikeButton from '../../../components/Mainpage/Gallery/LikeButton';
import { incrementLikeButton, decrementLikeButton, toggleLikeButton } from '../../../actions/mainpageActions';

const mapStateToProps = (state) => {
  return {
    color: state.pageColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    decrementLike: (id) => {
      dispatch(decrementLikeButton(id));
    },
    incrementLike: (id) => {
      dispatch(incrementLikeButton(id));
    },
    toggleLike: (id) => {
      dispatch(toggleLikeButton(id))
    }
  };
};


const ContainerLikeButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);

export default ContainerLikeButton;
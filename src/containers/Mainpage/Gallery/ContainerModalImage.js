import React from 'react';
import { connect } from 'react-redux';
import ModalImage from '../../../components/Mainpage/Gallery/ModalImage';
import { setGalleryModal } from '../../../actions/mainpageActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (bool) => {
      dispatch(setGalleryModal(bool));
    }
  };
}

const mapStateToProps = (state) => {
  return {
    galleryModalImageIsActive: state.galleryModalImageIsActive,
    imageUrl: state.galleryImageUrl
  };
}

const ContainerModalImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalImage);

export default ContainerModalImage;
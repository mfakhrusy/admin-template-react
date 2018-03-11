import React from 'react';
import { connect } from 'react-redux';
import Image from '../../../components/Mainpage/Gallery/Image';
import { setGalleryModal, setGalleryModalImage } from '../../../actions/mainpageActions';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (bool) => {
      dispatch(setGalleryModal(bool));
    },
    setGalleryModalImage: (url) => {
      dispatch(setGalleryModalImage(url))
    }
  };
}

const mapStateToProps = (state) => {
  return {
    images: state.galleryImages,
    color: state.pageColor,
    galleryModalImageIsActive: state.galleryModalImageIsActive
  };
}

const ContainerImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);

export default ContainerImage;
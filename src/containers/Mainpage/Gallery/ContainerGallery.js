import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../../../components/Mainpage/Gallery/Gallery';


const mapStateToProps = (state) => {
  return {
    images: state.galleryImages,
  };
}

const ContainerGallery = connect(
  mapStateToProps,
)(Gallery);

export default ContainerGallery;
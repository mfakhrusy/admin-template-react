import React from 'react';
import { connect } from 'react-redux';
import Image from '../../../components/Mainpage/Gallery/Image';


const mapStateToProps = (state) => {
  return {
    images: state.galleryImages,
  };
}

const ContainerImage = connect(
  mapStateToProps,
)(Image);

export default ContainerImage;
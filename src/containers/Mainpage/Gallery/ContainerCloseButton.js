import React from 'react';
import { connect } from 'react-redux';
import CloseButton from '../../../components/Mainpage/Gallery/CloseButton';
import { removeGalleryImage } from '../../../actions/mainpageActions';

const mapDispatchToProps = (dispatch) => {
  return {
    removeImage: (id) => {
      dispatch(removeGalleryImage(id))
    }
  };
};
     

const ContainerCloseButton = connect(
  null,
  mapDispatchToProps
)(CloseButton);

export default ContainerCloseButton;
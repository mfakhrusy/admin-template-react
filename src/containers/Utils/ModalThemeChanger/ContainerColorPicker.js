import React from 'react';
import { connect } from 'react-redux';
import ColorPicker from '../../../components/Utils/ModalThemeChanger/ColorPicker';
import { setModalThemeChanger } from '../../../actions/miscActions';
import { setNavbarThemeChanger } from '../../../actions/navbarActions';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeColor: () => {
      dispatch(setModalThemeChanger(ownProps.color));
    },
    closeThemeChanger: (bool) => {
      dispatch(setNavbarThemeChanger(bool))
    }
  };
}


const mapStateToProps = (state) => {
  return {
    navbarThemeChangerIsActive: state.navbarThemeChangerIsActive,
    pageColor: state.pageColor
  };
}

const ContainerColorPicker = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);

export default ContainerColorPicker;
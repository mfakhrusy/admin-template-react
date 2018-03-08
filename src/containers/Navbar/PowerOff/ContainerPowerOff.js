import React from 'react';
import { connect } from 'react-redux';
import PowerOff from '../../../components/Navbar/PowerOff/PowerOff';


const mapStateToProps = (state) => {
  return {
    color: state.pageColor,
  };
}

const ContainerPowerOff = connect(
  mapStateToProps,
)(PowerOff);

export default ContainerPowerOff;
import React from 'react';
import { connect } from 'react-redux';
import Mainpage from '../../components/Mainpage/Mainpage';

const mapStateToProps = (state) => {
  return {
    value: state.searchText
  }
}


const ContainerMainpage = connect(mapStateToProps)(Mainpage);

export default ContainerMainpage;
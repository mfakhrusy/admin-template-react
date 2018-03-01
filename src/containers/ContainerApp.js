import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from '../components/App';
import { pageFetchData } from '../actions/globalActions'; // REMEMBER IMPORT NOT DEFAULT

const mapStateToProps = (state) => {
  return {
    pageHasErrored: state.pageHasErrored,
    pageIsLoading: state.pageIsLoading
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(pageFetchData(url))
  };
};

// withRouter is needed to make the integration of react redux and router works
const ContainerApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


export default ContainerApp;
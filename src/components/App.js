import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Mainpage from './Mainpage/Mainpage';
import Navbar from './Navbar/Navbar';
import LoadingPage from './Utils/LoadingPage';
import LockedPage from './Utils/LockedPage';
import ContainerLockedPage from '../containers/Utils/ContainerLockedPage';
import ContainerModalThemeChanger from '../containers/Utils/ModalThemeChanger/ContainerModalThemeChanger';

import urlApis from '../constants/urlApis';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchData(urlApis);
  }

  render() {

    if (this.props.pageIsLoading) {
      return (
        <LoadingPage />
      )
    } else if (this.props.pageIsLocked) {
      return (
        <ContainerLockedPage />
      )
    } else {

      return (
        <div className="page-wrapper">  
          <Sidebar />
          <div className="main-wrapper">
            <ContainerModalThemeChanger />  
            <Navbar />
            <Mainpage />
          </div>
        </div>
      );
    } 

  }
}

export default App;
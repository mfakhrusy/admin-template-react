import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Mainpage from './Mainpage/Mainpage';
import LoadingPage from './Utils/LoadingPage';

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
    }
    
    return (
      <div className="wrapper">
        <Sidebar />
        <Mainpage />
      </div>
    );
  }
}

export default App;
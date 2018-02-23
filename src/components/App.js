import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Mainpage from './Mainpage/Mainpage';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <Mainpage />
      </div>
    );
  }
}

export default App;
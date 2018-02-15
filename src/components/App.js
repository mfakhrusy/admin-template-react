import React from 'react';
import Mainpage from './Mainpage/Mainpage'
import Sidebar from './Sidebar/Sidebar'

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
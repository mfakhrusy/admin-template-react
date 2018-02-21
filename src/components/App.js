import React from 'react';
import ContainerMainpage from '../containers/Mainpage/ContainerMainpage';
import Sidebar from './Sidebar/Sidebar'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar />
        <ContainerMainpage />
        {/* <h1>Hellow</h1> */}
      </div>
    );
  }
}

export default App;
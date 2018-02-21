import React from 'react';
import ContainerSearchForm from '../../../containers/Sidebar/Mainboard/ContainerSearchForm';


class MainboardPagesList extends React.Component {
  render() {
    return (
      <div>
        <h3>pages</h3>
      </div>
    );
  }
}

class SidebarMainboard extends React.Component {
  render() {
    return (
      <div>
        <ContainerSearchForm />
        <MainboardPagesList />
      </div>
    );
  }
}


export default SidebarMainboard;
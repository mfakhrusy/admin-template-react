import React from 'react';
import { Link } from 'react-router-dom';
import ContainerSearchBox from '../../../containers/Sidebar/ContainerSearchBox';
import ContainerPageList from '../../../containers/Sidebar/ContainerPageList';
import ItemHeader from '../ItemHeader';

class Mainboard extends React.Component {
  render() {
    return (
      <div className="sidebar-mainboard">
        <ContainerSearchBox />
        <ItemHeader>Pages</ItemHeader>
        <ContainerPageList />
      </div>
    );
  }
}

export default Mainboard;
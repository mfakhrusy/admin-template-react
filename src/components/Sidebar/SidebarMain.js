import React from 'react';
import PropTypes from 'prop-types';
import Mainboard from './Mainboard/Mainboard';
import Alert from './Alert/Alert';
import Chat from './Chat/Chat';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

const SidebarMainItem = ({showFilter}) => {
  switch (showFilter) {
    case 'SHOW_MAINBOARD':
      return (<Mainboard />);
    case 'SHOW_CHAT':
      return (<Chat />);
    case 'SHOW_STATISTICS':
      return (<Statistics />);
    case 'SHOW_NOTIFICATION':
      return (<Notification />);
    case 'SHOW_ALERT':
      return (<Alert />);
    default:
      return (<p>Error</p>); // lol
  }
}

class SidebarMain extends React.Component {
  render() {
    return (
      <div className="sidebar-main">
        <SidebarMainItem showFilter={this.props.showFilter} />
      </div>
    );
  }
}

SidebarMain.propTypes = {
  showFilter: PropTypes.string.isRequired
}


export default SidebarMain;
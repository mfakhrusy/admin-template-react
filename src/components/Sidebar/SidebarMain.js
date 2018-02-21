import React from 'react';
import SidebarMainboard from './Mainboard/SidebarMainboard';
import SidebarChat from './Chat/SidebarChat';
import SidebarStatistics from './Statistics/SidebarStatistics';
import SidebarNotification from './Notification/SidebarNotification';
import SidebarAlert from './Alert/SidebarAlert';


const SidebarMainItem = ({showFilter}) => {
  switch (showFilter) {
    case 'SHOW_MAINBOARD':
      return (<SidebarMainboard />);
    case 'SHOW_CHAT':
      return (<SidebarChat />);
    case 'SHOW_STATISTICS':
      return (<SidebarStatistics />);
    case 'SHOW_NOTIFICATION':
      return (<SidebarNotification />);
    case 'SHOW_ALERT':
      return (<SidebarAlert />);
    default:
      return (<p>ERROR!!!!</p>); // lol
  }
}

const SidebarMain = ({showFilter}) => {
  return (
    <div className="sidebar-main">
      <SidebarMainItem showFilter={showFilter} />
    </div>
  );
}

export default SidebarMain;

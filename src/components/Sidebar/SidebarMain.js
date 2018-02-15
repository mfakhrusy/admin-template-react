import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import SidebarMainboard from './SidebarMainboard';
import SidebarChat from './SidebarChat';
import SidebarStatistics from './SidebarStatistics';
import SidebarNotification from './SidebarNotification';
import SidebarAlert from './SidebarAlert';


class SidebarMain extends Component {
  render() {
    return (
      <div>
        {/* <Switch> */}
          {/* <Route exact path="/" component={SidebarMainboard} /> */}
          {/* <Route path="/chat" component={SidebarChat} /> */}
          {/* <Route path="/statistics" component={SidebarStatistics} /> */}
          {/* <Route path="/notification" component={SidebarNotification} /> */}
          {/* <Route path="/alert" component={SidebarAlert} /> */}
        {/* </Switch> */}
      </div>
    )
  }
}

export default SidebarMain;
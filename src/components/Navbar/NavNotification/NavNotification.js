import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';
import NotificationUserAvatar from './NotificationUserAvatar';
import NotificationStatus from './NotificationStatus';
import NotificationMessageTitle from './NotificationMessageTitle';
import NotificationMessage from './NotificationMessage';

class NavNotification extends React.Component {
  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
      hover: false,
    }
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }


  render() {

    if (this.state.hover) {
      return (
        <div className="navbar-notification navbar-dropdown" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <FontAwesomeIcon icon="fas fa-bullhorn" iconSize="fa-2x" />
          <div className="navbar-dropdown-content">
            <div className="navbar-dropdown-title">
              <h3>Your Notifications</h3>
            </div>
            {this.props.notifications.map((notif) => {
              return (
                <div href="#" key={notif.id} className={"navbar-dropdown-item " + `color-${this.props.color}-primary`}>
                  <div className="navbar-notification-aside">
                    <NotificationUserAvatar avatarUrl={notif.imageUrl} />
                    <NotificationStatus status={notif.status} />
                  </div>
                  <div className="navbar-dropdown-main">
                    <NotificationMessageTitle title={notif.title} name={notif.name}/>
                    <NotificationMessage message={notif.message.length > 100 ? notif.message.substring(0, 100 - 4) + " ..." : notif.message} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
 
    return (
      <div className="navbar-notification" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <FontAwesomeIcon icon="fas fa-bullhorn" iconSize="fa-2x" />
      </div>
    )  
  }
}

export default NavNotification;
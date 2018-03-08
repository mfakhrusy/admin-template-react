import React from 'react';

const NotificationStatus = ({status}) => {
  if (status) {
    return (
      <div className={`navbar-notification-status navbar-notification-status-${status}`}>
        <p>{status ? status : ""}</p>
      </div>
    )
  } else {
    return (
      null
    )  
  }
}

export default NotificationStatus;
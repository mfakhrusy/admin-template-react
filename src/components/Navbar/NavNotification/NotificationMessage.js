import React from 'react';

const NotificationMessage = ({message}) => {
  return (
    <div className={`navbar-notification-message navbar-notification-status-${status}`}>
      <p>{message}</p>
    </div>
  )
}

export default NotificationMessage;
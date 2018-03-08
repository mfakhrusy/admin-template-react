import React from 'react';

const NotificationTitle = ({title, name}) => {
  return (
    <div className={`navbar-notification-message-title`}>
      <h3>[{name}] {title}</h3>
    </div>
  )
}

export default NotificationTitle;
import React from 'react';

const NotificationUserAvatar = ({avatarUrl}) => {
  return (
    <div className={`navbar-notification-avatar`}>
      <img src={avatarUrl}/>
    </div>
  )
}

export default NotificationUserAvatar;
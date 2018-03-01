import React from 'react';

const UserAvatar = ({userStatus, avatarUrl}) => {
  return (
    <div className={`chat-user-avatar chat-user-avatar-${userStatus}`}>
      <img src={avatarUrl}/>
    </div>
  )
}

export default UserAvatar;
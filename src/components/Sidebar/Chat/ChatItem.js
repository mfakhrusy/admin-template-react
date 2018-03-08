import React from 'react';
import UserAvatar from './UserAvatar';

const ChatItem = ({username, userStatus, avatarUrl}) => {
  return (
    <li className="sidebar-chat-item">
      <UserAvatar userStatus={userStatus} avatarUrl={avatarUrl}/>
      <p>{username}</p>
    </li>
  )
}

export default ChatItem;
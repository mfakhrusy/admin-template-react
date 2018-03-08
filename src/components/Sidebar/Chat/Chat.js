import React from 'react';
import UserAvatar from './UserAvatar';
import ChatItem from './ChatItem';
import ItemHeader from '../ItemHeader';

class Chat extends React.Component {
  
  render() {

    return (
      <div className="sidebar-chat">
        <ul className="sidebar-chat-list chat-list-online">
          <ItemHeader>Online</ItemHeader>
          {this.props.users.filter((user) => (user.userStatus === "online")).map((user, index) => { // do this because IDK when doing user.id on key props, it still gives warning
            return (
              <ChatItem username={user.name} userStatus={user.userStatus} avatarUrl={user.imageUrl} key={user.id}/>
            );
          })}
        </ul>
        <ul className="sidebar-chat-list chat-list-busy">
          <ItemHeader>Busy</ItemHeader>
          {this.props.users.filter((user) => (user.userStatus === "busy")).map((user, index) => { // do this because IDK when doing user.id on key props, it still gives warning
            return (
              <ChatItem username={user.name} userStatus={user.userStatus} avatarUrl={user.imageUrl} key={user.id}/>
            );
          })}
        </ul>
        <ul className="sidebar-chat-list chat-list-offline">
          <ItemHeader>Offline</ItemHeader>
          {this.props.users.filter((user) => (user.userStatus === "offline")).map((user, index) => { // do this because IDK when doing user.id on key props, it still gives warning
            return (
              <ChatItem username={user.name} userStatus={user.userStatus} avatarUrl={user.imageUrl} key={user.id}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Chat;
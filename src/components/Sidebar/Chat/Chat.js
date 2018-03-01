import React from 'react';
import UserAvatar from './UserAvatar';

class Chat extends React.Component {

  componentDidMount() {
    // this.props.fetchData('http://5a94a5cb5d50d80012d016c7.mockapi.io/api/v1/users');
    console.log(this.props);
  }

  
  render() {
/*
    if (this.props.usersHasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.usersIsLoading) {
      return <p>Loading…</p>;
    }
*/
    return (
      <div className="sidebar-chat">
        <ul className="sidebar-chat-list">
          {this.props.users.map((user, index) => { // do this because IDK when doing user.id on key props, it still gives warning
            return (
              <li key={index.toString()} className="sidebar-chat-item">
                <UserAvatar userStatus={user.userStatus} avatarUrl={user.imageUrl}/> {user.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Chat;
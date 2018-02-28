import React from 'react';

class Chat extends React.Component {

  componentDidMount() {
    this.props.fetchData('http://5a94a5cb5d50d80012d016c7.mockapi.io/api/v1/users');
  }

  
  render() {

    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <span>{this.props.users[0].name}</span>
        <ul>
          {this.props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name + " = " + user.id}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Chat;
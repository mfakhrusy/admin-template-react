import React from 'react';

class NewsFeedMessage extends React.Component {
  render() {
    return (
      <div className="navbar-newsfeed-message">
        {this.props.children}
      </div>
    )
  }
}

export default NewsFeedMessage;
import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';
import NewsFeedMessage from './NewsFeedMessage';

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.toggleHover = this.toggleHover.bind(this);

    this.state = {
      hover: false
    };
  };

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  };
  
  
  render() {
  
    if (this.state.hover) {
      return (
        <div className="navbar-notification navbar-dropdown" onMouseLeave={this.toggleHover}>
          <FontAwesomeIcon icon="fas fa-rss" iconSize="fa-2x" />
          <div className="navbar-dropdown-content">
            <div className="navbar-dropdown-title">
              <h3>Your News Feed</h3>
            </div>
            {this.props.news.map((newsItem) => {
              switch (newsItem.type) {
                case 'star':
                return (
                  <div href="#" key={newsItem.id} className={"navbar-dropdown-item " + `color-${this.props.color}-primary`}>
                    <div className="navbar-dropdown-aside">
                      <FontAwesomeIcon icon={newsItem.fa_icon} icon-size="fa-1x" />
                    </div>
                    <div className="navbar-dropdown-main">
                      <NewsFeedMessage >
                        <p><span className="github-nickname">@{newsItem.github_nickname}</span> starred {newsItem.github_target}</p>
                        <p>{newsItem.message}</p>
                      </NewsFeedMessage>
                    </div>
                  </div>
                )
                case 'comment_issue':
                return (
                  <div href="#" key={newsItem.id} className={"navbar-dropdown-item " + `color-${this.props.color}-primary`}>
                    <div className="navbar-dropdown-aside">
                      <FontAwesomeIcon icon={newsItem.fa_icon} icon-size="fa-1x" />
                    </div>
                    <div className="navbar-dropdown-main">
                      <NewsFeedMessage>
                        <p><span className="github-nickname">@{newsItem.github_nickname}</span> commented on issue {newsItem.github_target}</p>
                        <p>{newsItem.message}</p>
                      </NewsFeedMessage>
                    </div>
                  </div>
                )
                case 'open_issue':
                return (
                  <div href="#" key={newsItem.id} className={"navbar-dropdown-item " + `color-${this.props.color}-primary`}>
                    <div className="navbar-dropdown-aside">
                      <FontAwesomeIcon icon={newsItem.fa_icon} icon-size="fa-1x" />
                    </div>
                    <div className="navbar-dropdown-main">
                      <NewsFeedMessage>
                        <p><span className="github-nickname">@{newsItem.github_nickname}</span> opened issue {newsItem.github_target}</p>
                        <p>{newsItem.message}</p>
                      </NewsFeedMessage>
                    </div>
                  </div>
                )
                case 'fork':
                return (
                  <div href="#" key={newsItem.id} className={"navbar-dropdown-item " + `color-${this.props.color}-primary`}>
                    <div className="navbar-dropdown-aside">
                      <FontAwesomeIcon icon={newsItem.fa_icon} icon-size="fa-1x" />
                    </div>
                    <div className="navbar-dropdown-main">
                      <NewsFeedMessage>
                        <p><span className="github-nickname">@{newsItem.github_nickname}</span> forked {newsItem.github_target}</p>
                        <p>{newsItem.message}</p>
                      </NewsFeedMessage>
                    </div>
                  </div>
                )
                default:

              } 

            })}
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar-newsfeed" onMouseEnter={this.toggleHover}>
          <FontAwesomeIcon icon="fas fa-rss" iconSize="fa-2x" />
        </div>
      )      
    }
  }
}

export default NewsFeed;
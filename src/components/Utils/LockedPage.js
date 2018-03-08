import React from 'react';
import FontAwesomeIcon from '../Utils/FontAwesomeIcon';


class LockedPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(!this.props.pageIsLocked);
  }

  render() {
    
    return (
      <div className="locked-page">
      <h3>Page Is Locked! Click this tiny unlock sign below to unlock the site!</h3>
        <div className="page-unlock-button" onClick={this.handleClick}>
          <FontAwesomeIcon icon="fas fa-unlock" iconSize="fa-1x" />
        </div>
        <img src="../../../images/loading_monkey.jpg" alt="loading-monkey" />
      </div>
    );
  }
}

export default LockedPage;
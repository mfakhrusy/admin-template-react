import React from 'react';
import FontAwesomeIcon from '../FontAwesomeIcon';


class ModalBoxHeader extends React.Component {
  constructor() {
    super();
    
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.props.closeThemeChanger(!this.props.navbarThemeChangerIsActive);
  }

  render() {
    return (
      <div className="modal-box-header">
        <h3>Change Site's Theme</h3>
        <div onClick={this.handleClick} className="modal-close-button">
          <FontAwesomeIcon icon="fas fa-times" iconSize="fa-2x" />
        </div>
      </div>
    )  
  }
}

export default ModalBoxHeader;
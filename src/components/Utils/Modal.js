import React from 'react';

class Modal extends React.Component {

  render() {
    return (
      <div className="modal-wrapper-fixed">
        <div className="modal-wrapper">
          <div className="modal-box">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
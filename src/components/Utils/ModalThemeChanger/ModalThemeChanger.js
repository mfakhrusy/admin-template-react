import React from 'react';
import ContainerColorPicker from '../../../containers/Utils/ModalThemeChanger/ContainerColorPicker';
import ContainerModalBoxHeader from '../../../containers/Utils/ModalThemeChanger/ContainerModalBoxHeader';

class ModalThemeChanger extends React.Component {
  render() {

    if (!this.props.navbarThemeChangerIsActive) {
      return (
        null
      )
    }

    return (
      <div className="modal-theme-changer-wrapper">
        <div className="modal-box">
          <ContainerModalBoxHeader />
          <div className="modal-box-main">
            <ContainerColorPicker color="red" />
            <ContainerColorPicker color="green" />
            <ContainerColorPicker color="blue" />
            <ContainerColorPicker color="violet" />
            <ContainerColorPicker color="brown" />
            <ContainerColorPicker color="grey" />
          </div>
        </div>
      </div>
    )
  }
}

export default ModalThemeChanger;
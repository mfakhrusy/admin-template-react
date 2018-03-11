import React from 'react';
import Modal from '../../Utils/Modal';
import ContainerColorPicker from '../../../containers/Navbar/ThemeChanger/ContainerColorPicker';
import ContainerModalThemeBoxHeader from '../../../containers/Navbar/ThemeChanger/ContainerModalThemeBoxHeader';

class ModalThemeChanger extends React.Component {
  render() {

    if (!this.props.navbarThemeChangerIsActive) {
      return (
        null
      )
    } else {
      return (
        <Modal>
          <div className="modal-theme-changer-wrapper">
            <ContainerModalThemeBoxHeader />
            <div className="modal-box-main">
              <ContainerColorPicker color="red" />
              <ContainerColorPicker color="green" />
              <ContainerColorPicker color="blue" />
              <ContainerColorPicker color="violet" />
              <ContainerColorPicker color="brown" />
              <ContainerColorPicker color="grey" />
            </div>
          </div>
        </Modal>
      )  
    }
  }
}

export default ModalThemeChanger;
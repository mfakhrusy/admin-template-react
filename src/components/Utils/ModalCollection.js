import React from 'react';
import ContainerModalThemeChanger from '../../containers/Navbar/ThemeChanger/ContainerModalThemeChanger';
import ContainerModalImage from '../../containers/Mainpage/Gallery/ContainerModalImage';

const ModalCollection = () => {
  return (
    <div>
      <ContainerModalThemeChanger />
      <ContainerModalImage />
    </div>
  );
}

export default ModalCollection;
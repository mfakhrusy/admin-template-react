import React from 'react';
import NavItem from './NavItem';
import Title from './Title/Title';
import ThemeChanger from './ThemeChanger/ThemeChanger';
import ContainerThemeChanger from '../../containers/Navbar/ThemeChanger/ContainerThemeChanger';
import LanguageChanger from './LanguageChanger/LanguageChanger';
import NavSocial from './NavSocial/NavSocial';
import Settings from './Settings/Settings';
import NavMailbox from './NavMailbox/NavMailbox';
import ContainerNavNotification from '../../containers/Navbar/NavNotification/ContainerNavNotification';
import ContainerNewsFeed from '../../containers/Navbar/NewsFeed/ContainerNewsFeed';
import ContainerPowerOff from '../../containers/Navbar/PowerOff/ContainerPowerOff';


class Navbar extends React.Component {

  render() {
    return (
      <nav className="page-navbar" id="page-navbar">
        <ul className="navbar-list">
          <NavItem>
            <Title />
          </NavItem>
          <NavItem>
            <ContainerThemeChanger />
          </NavItem>
          {/* <NavItem> */}
            {/* <LanguageChanger /> */}
          {/* </NavItem> */}
          <NavItem>
            <NavSocial />
          </NavItem>
          <NavItem>
            <Settings />
          </NavItem>
          <NavItem>
            <NavMailbox />
          </NavItem>
          <NavItem>
            <ContainerNavNotification />
          </NavItem>
          <NavItem>
            <ContainerNewsFeed />
          </NavItem>
          <NavItem>
            <ContainerPowerOff />
          </NavItem>
        </ul>
      </nav>
    )
  }
}

export default Navbar;
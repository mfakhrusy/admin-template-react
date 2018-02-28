import React from 'react';
import { Link } from 'react-router-dom';
import ContainerPageListItem from '../../../containers/Sidebar/ContainerPageListItem';


class PageList extends React.Component {
  
  render() {
    return (
      <nav className="mainboard-pages-list">
        <ul>
          {this.props.pageItems.map((item) => {
            return (
              <ContainerPageListItem 
                key={item.id} 
                icon={item.icon} 
                iconSize={item.iconSize} 
                pageListItemClass={item.pageListItemClass} 
                path={!item.hasDropdown ? item.path : ''}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.hasDropdown ? item.dropdownItems : undefined} >
                  {item.label}
              </ContainerPageListItem>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default PageList;
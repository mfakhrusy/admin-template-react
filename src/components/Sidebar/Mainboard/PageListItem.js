import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';
import ContainerPageListItem from '../../../containers/Sidebar/ContainerPageListItem';


//const PageListItem = ({icon, iconSize, pageListItemClass, children, active, path, hasDropdown, dropdownItems}) => {  
class PageListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false
    };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
  
  handleClick() {
    this.toggleClass();
    console.log(this.state.active);
  }

  render() {

    if (this.props.hasDropdown) {
      return (
      <li>
        <div className={"page-list-item " + this.props.pageListItemClass} onClick={this.handleClick}>
          <div className="mainboard-icon">
            <FontAwesomeIcon icon={this.props.icon} iconSize={this.props.iconSize} />
          </div> 
            {this.props.children}
          <div className={"mainboard-icon-arrow " + (this.state.active? "mainboard-icon-arrow-open" : "")}>
            <FontAwesomeIcon icon="fas fa-angle-left" iconSize="fa-1x" />
          </div>
        </div>
        <ul className={this.state.active? "page-list-dropdown-open" : "page-list-dropdown"}>
          {this.props.dropdownItems.map((item) => (
            <ContainerPageListItem 
                key={item.id} 
                icon={item.icon} 
                iconSize={item.iconSize} 
                pageListItemClass={item.pageListItemClass} 
                path={!item.hasDropdown ? item.path : undefined}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.hasDropdown ? item.dropdownItems : undefined} >
                  {item.label}
            </ContainerPageListItem>
          ))}
        </ul>
      </li>
      );
    } else {
      return (
        <li>
          <Link to={this.props.path}>
            <div className={"page-list-item " + this.props.pageListItemClass}>
              <div className="mainboard-icon">
                <FontAwesomeIcon icon={this.props.icon} iconSize={this.props.iconSize} />
              </div>
              {this.props.children}
            </div>
          </Link>
        </li>
      );  
    }
  }
}

export default PageListItem;
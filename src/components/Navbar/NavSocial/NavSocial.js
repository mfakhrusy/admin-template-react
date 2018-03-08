import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';
import { Link } from 'react-router-dom';

const NavSocial = () => {
  return (
    <Link to="/social">
      <div className="navbar-router">
        <FontAwesomeIcon icon="fas fa-user" iconSize="fa-2x" />
      </div>
    </Link>
  )
}

export default NavSocial;
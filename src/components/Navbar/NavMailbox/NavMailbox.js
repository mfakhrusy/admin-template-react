import React from 'react';
import FontAwesomeIcon from '../../Utils/FontAwesomeIcon';
import { Link } from 'react-router-dom';

const NavMailbox = () => {
  return (
    <Link to="/mailbox/inbox">
      <div className="navbar-router">
        <FontAwesomeIcon icon="fas fa-envelope" iconSize="fa-2x" />
      </div>
    </Link>
  )
}

export default NavMailbox;
import React from 'react';
import { Link } from 'react-router-dom';

class Mainboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Mainboard</h1>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/mailbox">Mailbox</Link>
          </li>
          <li>
            <Link to="/social">Social</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Mainboard;
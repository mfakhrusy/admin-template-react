import React from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = () => (
  <h1>Dashyyy</h1>
)

const Mailbox = () => (
  <h1>Mailyyyy</h1>
)

const Social = () => (
  <h1>Sociyyy</h1>
)

class Mainpage extends React.Component {
  render() {
    return (
      <main id="page-mainpage">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/mailbox" component={Mailbox} />
          <Route path="/social" component={Social} />
        </Switch>
      </main>
    );
  }
}

export default Mainpage;
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Compose from './Mailbox/Compose/Compose';
import Inbox from './Mailbox/Inbox/Inbox';
import Mail from './Mailbox/Mail/Mail';
import Gallery from './Gallery/Gallery';
import ContainerGallery from '../../containers/Mainpage/Gallery/ContainerGallery';
import Social from './Social/Social';
import SinglePost from './Blog/SinglePost/SinglePost';
import MultiplePosts from './Blog/MultiplePosts/MultiplePosts';


class Mainpage extends React.Component {
  render() {
    return (
      <main id="page-mainpage">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/mailbox/inbox" component={Inbox} />
          <Route path="/mailbox/mail" component={Mail} />
          <Route path="/mailbox/compose" component={Compose} />
          <Route path="/gallery" component={ContainerGallery} />
          <Route path="/social" component={Social} />
          <Route path="/blog/post" component={SinglePost} />
          <Route path="/blog/posts" component={MultiplePosts} />
        </Switch>
      </main>
    );
  }
}

export default Mainpage;
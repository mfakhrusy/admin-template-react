import React from 'react';
import { connect } from 'react-redux';
import NewsFeed from '../../../components/Navbar/NewsFeed/NewsFeed';

const mapStateToProps = (state) => {
  return {
    news: state.news,
    color: state.pageColor
  }
}

const ContainerNewsFeed = connect(mapStateToProps)(NewsFeed);

export default ContainerNewsFeed;
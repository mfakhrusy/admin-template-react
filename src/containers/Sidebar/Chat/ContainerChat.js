import React from 'react';
import { connect } from 'react-redux';
import Chat from '../../../components/Sidebar/Chat/Chat';
import { usersFetchData } from '../../../actions/sidebarActions';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    hasErrored: state.usersHasErrored,
    isLoading: state.usersIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(usersFetchData(url))
  };
};

const ContainerChat = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ContainerChat;
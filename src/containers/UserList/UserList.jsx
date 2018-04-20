import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsersRequest } from '../../redux/user/actions';
import UserList from '../../components/UserList/UserList';

class UserListContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(10);
  }
  render() {
    const { users, loading } = this.props;
    return <UserList users={users} loading={loading} />;
  }
}

UserListContainer.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.UserReducer.users,
  loading: state.UserReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  getUsers: amount => dispatch(getUsersRequest(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);

import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import styles from './UserList.scss';

export default function UserList({ users, loading }) {
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      {users.map(user => (
        <div
          className={styles.user}
          key={uuid.v4()}
        >
          {user.email}
        </div>
      ))}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    email: PropTypes.string.isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
};

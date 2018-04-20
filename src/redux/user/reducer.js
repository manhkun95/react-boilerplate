import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './actions';

const initialState = {
  users: [],
  loading: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_USERS_SUCCESS: {
      const { users } = action.payload;
      return {
        ...state,
        loading: false,
        users,
      };
    }
    case GET_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
    default: return state;
  }
}

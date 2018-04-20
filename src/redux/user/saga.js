import { all, call, takeEvery, put, fork } from 'redux-saga/effects';
import { getUsersSuccess, getUsersFailure } from './actions';
import { fetchRandomUsers } from '../../apis/user';

export function* userRequest() {
  yield takeEvery('GET_USERS_REQUEST', function*(action) {
    const { amount } = action.payload;
    try {
      const { users } = yield call(fetchRandomUsers, amount);
      if (users) {
        yield put(getUsersSuccess(users));
      } else {
        throw new Error();
      }
    } catch (err) {
      yield put(getUsersFailure());
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(userRequest),
  ]);
}
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga'
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger];
}
const store = createStore(
  combineReducers({
    ...reducers,
  }),
  compose(applyMiddleware(...middlewares, logger))
);

sagaMiddleware.run(rootSaga);

export default store;
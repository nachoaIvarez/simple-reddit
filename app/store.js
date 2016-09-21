import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import reducer from './state/reducer';

const createStoreWithMiddleware = applyMiddleware(
  apiMiddleware,
)(createStore);

export default createStoreWithMiddleware(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
);

import { Provider } from 'react-redux';

import store from './store';
import Main from './containers/Main';

import 'normalize.css';

import '~/styles/base.css';

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

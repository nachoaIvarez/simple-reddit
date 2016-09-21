import { handleActions } from 'redux-actions';

import {
  REQUEST_SUBREDDIT,
  REQUEST_SUBREDDIT_SUCCESS,
  REQUEST_SUBREDDIT_FAILURE,
} from './constants';

const initialState = {
  subreddit: 'funny',
  loaded: false,
  error: false,
  posts: [],
};

export default handleActions({
  [REQUEST_SUBREDDIT]: (state, action) => ({
    ...state,
    loaded: false,
    subreddit: action.payload.subreddit,
  }),
  [REQUEST_SUBREDDIT_SUCCESS]: (state, action) => ({
    ...state,
    error: false,
    loaded: true,
    posts: action.payload.data.children,
  }),
  [REQUEST_SUBREDDIT_FAILURE]: state => ({
    ...state,
    loaded: true,
    error: true,
    posts: [],
  }),
}, initialState);

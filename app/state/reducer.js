import { handleActions } from 'redux-actions';

import {
  REQUEST_SUBREDDIT,
  REQUEST_SUBREDDIT_SUCCESS,
  REQUEST_SUBREDDIT_FAILURE,
} from './constants';

const initialState = {
  subreddit: 'funny',
  success: false,
  loading: false,
  failure: false,
  posts: [],
};

export default handleActions({
  [REQUEST_SUBREDDIT]: (state, action) => ({
    ...state,
    success: false,
    loading: true,
    failure: false,
    subreddit: action.payload.subreddit,
  }),
  [REQUEST_SUBREDDIT_SUCCESS]: (state, action) => ({
    ...state,
    success: true,
    loading: false,
    failure: false,
    posts: action.payload.data.children,
  }),
  [REQUEST_SUBREDDIT_FAILURE]: state => ({
    ...state,
    success: false,
    loading: false,
    failure: true,
    posts: [],
  }),
}, initialState);

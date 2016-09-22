import { handleActions } from 'redux-actions';

import {
  REQUEST_SUBREDDIT,
  REQUEST_SUBREDDIT_SUCCESS,
  REQUEST_SUBREDDIT_FAILURE,
  SHOW_DETAIL,
  HIDE_DETAIL,
} from './constants';

const initialState = {
  subreddit: 'funny',
  status: null,
  detail: null,
  posts: [],
};

export default handleActions({
  [REQUEST_SUBREDDIT]: (state, action) => ({
    ...state,
    status: 'loading',
    subreddit: action.payload.subreddit,
  }),
  [REQUEST_SUBREDDIT_SUCCESS]: (state, action) => ({
    ...state,
    status: 'success',
    posts: action.payload.data.children,
  }),
  [REQUEST_SUBREDDIT_FAILURE]: state => ({
    ...state,
    status: 'failure',
    posts: [],
  }),
  [SHOW_DETAIL]: (state, action) => ({
    ...state,
    detail: action.payload.id,
  }),
  [HIDE_DETAIL]: state => ({
    ...state,
    detail: null,
  }),
}, initialState);

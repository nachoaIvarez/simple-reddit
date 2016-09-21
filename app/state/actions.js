import { CALL_API } from 'redux-api-middleware';

import {
  CHANGE_SUBREDDIT,
  REQUEST_SUBREDDIT,
  REQUEST_SUBREDDIT_SUCCESS,
  REQUEST_SUBREDDIT_FAILURE,
} from './constants';

export const requestSubreddit = subreddit => ({
  [CALL_API]: {
    endpoint: `http://www.reddit.com/r/${subreddit}/.json`,
    method: 'GET',
    types: [REQUEST_SUBREDDIT, REQUEST_SUBREDDIT_SUCCESS, REQUEST_SUBREDDIT_FAILURE],
  },
});

export const changeSubreddit = subreddit => (dispatch) => {
  dispatch(requestSubreddit(subreddit));
  return {
    type: CHANGE_SUBREDDIT,
    payload: {
      subreddit,
    },
  };
};

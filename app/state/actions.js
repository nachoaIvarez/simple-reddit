import { CALL_API } from 'redux-api-middleware';

import {
  REQUEST_SUBREDDIT,
  REQUEST_SUBREDDIT_SUCCESS,
  REQUEST_SUBREDDIT_FAILURE,
} from './constants';

export const requestSubreddit = subreddit => ({
  [CALL_API]: {
    endpoint: `http://www.reddit.com/r/${subreddit}/.json`,
    method: 'GET',
    types: [
      {
        type: REQUEST_SUBREDDIT,
        payload: {
          subreddit,
        },
      },
      REQUEST_SUBREDDIT_SUCCESS,
      REQUEST_SUBREDDIT_FAILURE,
    ],
  },
});

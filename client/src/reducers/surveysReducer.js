import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      console.log('FETCHING', action.payload)
      return action.payload || false;
    default:
      return state;
  }
}

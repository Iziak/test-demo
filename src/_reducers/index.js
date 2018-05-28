import { combineReducers } from 'redux';

import {playerList, stored} from './player.reducer';

const rootReducer = combineReducers({
  playerList,
  stored
});

export default rootReducer;
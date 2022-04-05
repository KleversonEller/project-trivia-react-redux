import { combineReducers } from 'redux';
import player from './user';
import token from './getToken';

const reducer = combineReducers({ player, token });

export default reducer;

import { combineReducers } from 'redux';
import player from './user';
import questions from './questions';
import token from './getToken';

const reducer = combineReducers({ player, questions, token });

export default reducer;

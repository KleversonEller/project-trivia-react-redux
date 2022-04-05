import { EMAIL_NICK } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_NICK:
    return { ...state, gravatarEmail: action.email, name: action.name };
  default:
    return state;
  }
}

export default player;

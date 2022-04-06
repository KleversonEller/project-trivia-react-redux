import { EMAIL_NICK, GRAVATAR_HASH, SUM_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: 0,
  gravatarEmail: '',
  picture: '',
};

function player(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_NICK:
    return { ...state, gravatarEmail: action.email, name: action.nick };
  case GRAVATAR_HASH:
    return { ...state, picture: action.payload };
  case SUM_SCORE:
    return { ...state, score: state.score + action.score };
  default:
    return state;
  }
}

export default player;

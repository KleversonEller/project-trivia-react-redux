import { LOAD_QUESTIONS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOAD_QUESTIONS_SUCCESS:
    return action.questions.results;
  default:
    return state;
  }
};

export default questions;

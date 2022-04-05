import { LOAD_QUESTIONS_FAIL, LOAD_QUESTIONS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  questions: [],
  error: '',
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOAD_QUESTIONS_SUCCESS:
    return { ...state, questions: action.questions };
  case LOAD_QUESTIONS_FAIL:
    return { ...state, error: action.error };
  default:
    return state;
  }
};

export default questions;

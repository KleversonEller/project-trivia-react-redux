import fetchGravatar from '../services/gravatarAPI';
import getToken from '../services/getToken';
import fetchQuestions from '../services/fetchQuestions';

export const EMAIL_NICK = 'EMAIL_NICK';
export const GRAVATAR_HASH = 'GRAVATAR_HASH';
export const GET_TOKEN = 'GET_TOKEN';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAIL = 'LOAD_QUESTIONS_FAIL';

export const getUser = (email, nick) => ({ type: EMAIL_NICK, email, nick });

export const actionGravatar = (payload) => ({ type: GRAVATAR_HASH, payload });

const actionGetToken = (token) => ({ type: GET_TOKEN, token });

export const loadQuestionsSuccess = (questions) => (
  { type: LOAD_QUESTIONS_SUCCESS, questions }
);
export const loadQuestionsFail = (error) => ({ type: LOAD_QUESTIONS_FAIL, error });

export const thunkGravatar = (email) => async (dispatch) => {
  try {
    const response = await fetchGravatar(email);
    dispatch(actionGravatar(response));
  } catch (error) {
    dispatch(actionGravatar(error));
  }
};

export const thunkGetToken = (email, nick) => async (dispatch) => {
  const token = await getToken();
  dispatch(actionGetToken(token.token));
  dispatch(getUser(email, nick));
};

export const loadQuestions = () => async (dispatch) => {
  try {
    const data = await fetchQuestions();
    dispatch({ type: LOAD_QUESTIONS_SUCCESS, data });
  } catch (error) {
    dispatch({ type: LOAD_QUESTIONS_FAIL, error });
  }
};

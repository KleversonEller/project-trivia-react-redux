import fetchGravatar from '../services/gravatarAPI';
import getToken from '../services/getToken';
import fetchTriviaApi from '../services/fetchQuestions';

export const EMAIL_NICK = 'EMAIL_NICK';
export const GRAVATAR_HASH = 'GRAVATAR_HASH';
export const GET_TOKEN = 'GET_TOKEN';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';

export const getUser = (email, nick) => ({ type: EMAIL_NICK, email, nick });

export const actionGravatar = (payload) => ({ type: GRAVATAR_HASH, payload });

const actionGetToken = (token) => ({ type: GET_TOKEN, token });

export const loadQuestionsSuccess = (questions) => (
  { type: LOAD_QUESTIONS_SUCCESS, questions }
);

export const thunkGetToken = (email, nick) => async (dispatch) => {
  const token = await getToken();
  const questions = await fetchTriviaApi(token.token);
  const response = await fetchGravatar(email);
  dispatch(actionGetToken(token.token));
  dispatch(getUser(email, nick));
  dispatch(loadQuestionsSuccess(questions));
  dispatch(actionGravatar(response));
};

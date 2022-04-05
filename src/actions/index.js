import fetchQuestions from '../services/fetchQuestions';

export const EMAIL_NICK = 'EMAIL_NICK';
export const LOAD_QUESTIONS_SUCCESS = 'LOAD_QUESTIONS_SUCCESS';
export const LOAD_QUESTIONS_FAIL = 'LOAD_QUESTIONS_FAIL';

export const getUser = (email, nick) => ({ type: EMAIL_NICK, email, nick });
export const loadQuestionsSuccess = (questions) => (
  { type: LOAD_QUESTIONS_SUCCESS, questions }
);
export const loadQuestionsFail = (error) => ({ type: LOAD_QUESTIONS_FAIL, error });

export const loadQuestions = () => async (dispatch) => {
  try {
    const data = await fetchQuestions();
    dispatch({ type: LOAD_QUESTIONS_SUCCESS, data });
  } catch (error) {
    dispatch({ type: LOAD_QUESTIONS_FAIL, error });
  }
};

import fetchGravatar from '../services/gravatarAPI';
import getToken from '../service/getToken';

export const EMAIL_NICK = 'EMAIL_NICK';
export const GRAVATAR_HASH = 'GRAVATAR_HASH';
export const GET_TOKEN = 'GET_TOKEN';

export const getUser = (email, nick) => ({ type: EMAIL_NICK, email, nick });

export const actionGravatar = (payload) => ({ type: GRAVATAR_HASH, payload });

const actionGetToken = (token) => ({ type: GET_TOKEN, token });

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

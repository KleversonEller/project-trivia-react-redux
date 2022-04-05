import getToken from '../service/getToken';

export const EMAIL_NICK = 'EMAIL_NICK';
export const GET_TOKEN = 'GET_TOKEN';

const getPlayer = (email, nick) => ({ type: EMAIL_NICK, email, nick });

const actionGetToken = (token) => ({ type: GET_TOKEN, token });

export const thunkGetToken = (email, nick) => async (dispatch) => {
  const token = await getToken();
  dispatch(actionGetToken(token.token));
  dispatch(getPlayer(email, nick));
};

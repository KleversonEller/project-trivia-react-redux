import fetchGravatar from '../services/gravatarAPI';
// import md5 from 'crypto-js/md5';

export const EMAIL_NICK = 'EMAIL_NICK';
export const GRAVATAR_HASH = 'GRAVATAR_HASH';

export const getUser = (email, nick) => ({ type: EMAIL_NICK, email, nick });

export const actionGravatar = (payload) => ({
  type: GRAVATAR_HASH,
  payload,
});

export const thunkGravatar = (email) => async (dispatch) => {
  try {
    const response = await fetchGravatar(email);
    dispatch(actionGravatar(response));
  } catch (error) {
    dispatch(actionGravatar(error));
  }
};

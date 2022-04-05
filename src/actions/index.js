export const EMAIL_NICK = 'EMAIL_NICK';

export const getUser = (email, nick) => ({ type: EMAIL_NICK, email, nick });

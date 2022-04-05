import md5 from 'crypto-js/md5';

const fetchGravatar = async (email) => {
  const HASH = md5(email).toString();
  const END_POINT = `https://www.gravatar.com/avatar/${HASH}`;
  return END_POINT;
};

export default fetchGravatar;

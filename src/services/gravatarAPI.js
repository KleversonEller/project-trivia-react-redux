import md5 from 'crypto-js/md5';

const fetchGravatar = async (email) => {
  const HASH = md5(email).toString();
  const END_POINT = `https://www.gravatar.com/avatar/${HASH}`;
  const response = await fetch(END_POINT);
  return response.url;
};

export default fetchGravatar;

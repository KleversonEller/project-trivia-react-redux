const url = 'https://opentdb.com/api_token.php?command=request';

const getToken = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getToken;

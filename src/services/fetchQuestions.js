const fetchTriviaApi = async (token) => {
  const endpoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

const generateNewToken = async () => {
  const endpoint = 'https://opentdb.com/api_token.php?command=request';
  const fetchToken = await fetch(endpoint);
  const data = await fetchToken.json();
  localStorage.setItem('token', data.token);
  return data.token;
};

const fetchQuestions = async () => {
  const token = 'cf63536944aca69c30b6d388e2c004e58058c0b8e63d9e220efcb5d404650fd6';
  // const token = localStorage.getItem('token');
  const data = await fetchTriviaApi(token);
  if (data.response_code === 0) return data.results;
  const newToken = await generateNewToken();
  const newData = await fetchTriviaApi(newToken);
  return newData.results;
};

console.log(fetchQuestions());

export default fetchQuestions;

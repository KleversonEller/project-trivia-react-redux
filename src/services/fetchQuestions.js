// import getToken from './getToken';

const fetchTriviaApi = async (token) => {
  const endpoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

// const fetchQuestions = async (token) => {
//   let data = await fetchTriviaApi(token);
//   if (data.response_code === 0) {
//     const result = await getToken();
//     const newData = await fetchTriviaApi(result);
//     data = newData;
//   } else {
//     const newData = await fetchTriviaApi(token);
//     data = newData;
//   }
//   console.log(data);
//   return data;
// };

export default fetchTriviaApi;

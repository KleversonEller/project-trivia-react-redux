import { LOAD_QUESTIONS_SUCCESS } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOAD_QUESTIONS_SUCCESS:
    return action.questions.results
      .map((question) => ({
        difficulty: question.difficulty,
        category: question.category,
        question: question.question,
        answers: question.incorrect_answers.length >= 2
          ? [
            {
              answer: question.correct_answer,
              className: 'correct',
              testId: 'correct-answer',
            },
            {
              answer: question.incorrect_answers[0],
              className: 'incorrect',
              testId: 'wrong-answer-0',
            },
            {
              answer: question.incorrect_answers[1],
              className: 'incorrect',
              testId: 'wrong-answer-1',
            },
            {
              answer: question.incorrect_answers[2],
              className: 'incorrect',
              testId: 'wrong-answer-2',
            },
          ]
          : [
            {
              answer: question.correct_answer,
              className: 'correct',
              testId: 'correct-answer',
            },
            {
              answer: question.incorrect_answers[0],
              className: 'incorrect',
              testId: 'wrong-answer-0',
            },
          ] }));
  default:
    return state;
  }
};

export default questions;

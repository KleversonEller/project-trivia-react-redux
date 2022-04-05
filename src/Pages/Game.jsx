import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { loadQuestions } from '../actions';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currentIndex: 0,
      answers: [],
    };
  }

  componentDidMount() {
    const { loadQuestionsAction, questions } = this.props;
    loadQuestionsAction();
    const { currentIndex } = this.state;
    this.setState({
      questions,
      answers: [
        {
          answer: questions[currentIndex].correct_answer,
          testId: 'correct-answer',
        },
        {
          answer: questions[currentIndex].incorrect_answers[0],
          testId: 'wrong-answer-0',
        },
        {
          answer: questions[currentIndex].incorrect_answers[1],
          testId: 'wrong-answer-1',
        },
        {
          answer: questions[currentIndex].incorrect_answers[2],
          testId: 'wrong-answer-2',
        },
      ],
    });
  }

  render() {
    const { questions, currentIndex, answers } = this.state;
    return (
      <main>
        <h2 data-testid="question-category">{questions[currentIndex].category}</h2>
        <h3 data-testid="question-text">{questions[currentIndex].question}</h3>
        <div data-testid="answer-options">
          {answers // ideia de randomizar array baseada nas respostas do link https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
            .map((element) => ({ element, sort: Math.random() }))
            // cria um array de objetos, cada objeto contendo um elemento e um numero aleatório
            .sort((a, b) => a.sort - b.sort)
            // ordena o array em ordem crescente baseado no número aleatório
            .map(({ element }) => element)
            // retorna o novo array em uma ordem aleatória
            .map(({ answer, testId }, index) => (
              <button data-testid={ testId } key={ index } type="button">
                {answer}
              </button>
            ))}
        </div>
      </main>
    );
  }
}

Game.propTypes = {
  loadQuestionsAction: propTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
});

const mapDispatchToProps = (dispatch) => ({
  loadQuestionsAction: () => dispatch(loadQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);

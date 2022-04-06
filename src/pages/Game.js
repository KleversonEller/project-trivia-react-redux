import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      indexQuest: 0,
    };
  }

  render() {
    const { questions } = this.props;
    const { indexQuest } = this.state;
    return (
      <div>
        {questions.length > 0
          ? (
            <div>
              <Header />
              <p data-testid="question-category">
                { questions[indexQuest].category}
              </p>
              <p data-testid="question-text">
                { questions[indexQuest].question}
              </p>
              {questions[indexQuest].incorrect_answers > 1
                ? (
                  <div data-testid="answer-options">
                    <button type="button" data-testid="correct-answer">
                      { questions[indexQuest].correct_answer}
                    </button>
                    <button type="button" data-testid="wrong-answer-0">
                      { questions[indexQuest].incorrect_answers[0]}
                    </button>
                    <button type="button" data-testid="wrong-answer-1">
                      { questions[indexQuest].incorrect_answers[1]}
                    </button>
                    <button type="button" data-testid="wrong-answer-2">
                      { questions[indexQuest].incorrect_answers[2]}
                    </button>
                  </div>
                )
                : (
                  <div data-testid="answer-options">
                    <button type="button" data-testid="correct-answer">
                      { questions[indexQuest].correct_answer}
                    </button>
                    <button type="button" data-testid="wrong-answer-0">
                      { questions[indexQuest].incorrect_answers[0]}
                    </button>
                  </div>
                )}
            </div>
          )
          : <p> Loading ... </p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questions: state.questions,
});

Game.propTypes = {
  questions: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Game);

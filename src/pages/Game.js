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
              <div data-testid="answer-options">
                {questions[indexQuest].answers
                  .map((element) => ({ element, sort: Math.random() }))
                  .sort((a, b) => a.sort - b.sort)
                  .map(({ element }) => element)
                  .map(({ answer, testId }, index) => (
                    <button data-testid={ testId } key={ index } type="button">
                      {answer}
                    </button>
                  ))}
              </div>
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

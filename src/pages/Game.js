import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Timer from '../components/Timer';
import './Game.css';
import { getScore } from '../actions';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      indexQuest: 0,
      classActive: false,
      disabled: false,
    };
  }

  timeOut = () => {
    this.setState({
      disabled: true,
    });
  }

  changeClass = () => {
    this.setState({
      classActive: true,
    });
    const HARD_VALUE = 3;
    const MEDIUM_VALUE = 2;
    const EASY_VALUE = 1;
    const DEFAULT_VALUE = 10;
    const { name, value } = event.target;
    const corretClick = name === 'correct';

    let difficultyValue = 0;
    if (value === 'hard') difficultyValue = HARD_VALUE;
    if (value === 'medium') difficultyValue = MEDIUM_VALUE;
    if (value === 'easy') difficultyValue = EASY_VALUE;

    if (corretClick) {
      const result = (DEFAULT_VALUE + (DEFAULT_VALUE * difficultyValue));
      scoreGet(result);
    }
  }

  render() {
    const { questions } = this.props;
    const { indexQuest, classActive, disabled } = this.state;
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
                  .map(({ answer, testId, className }, index) => (
                    <button
                      data-testid={ testId }
                      key={ index }
                      type="button"
                      disabled={ disabled }
                      className={ classActive && className }
                      onClick={ this.changeClass }
                      name={ className }
                      value={ questions[indexQuest].difficulty }
                    >
                      {answer}
                    </button>
                  ))}
              </div>
              <div>
                <Timer timeOut={ this.timeOut } />
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

const mapDispatchToProps = (dispatch) => ({
  scoreGet: (score) => dispatch(getScore(score)),
});

Game.propTypes = {
  questions: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Game);

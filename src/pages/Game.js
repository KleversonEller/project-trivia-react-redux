import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header';
import Timer from '../components/Timer';
import './Game.css';
import { getScore } from '../actions';
// import { Redirect } from 'react-router-dom';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      indexQuest: 0,
      classActive: false,
      disabled: false,
      timer: 0,
      next: false,
    };
  }

  timeOut = () => {
    this.setState({
      disabled: true,
    });
  }

  timer = (timer) => {
    const { next } = this.state;
    if (next) {
      this.setState({
        timer,
      });
    }
  }

  changeClass = (event) => {
    const { scoreGet } = this.props;
    const { timer } = this.state;
    this.setState({
      classActive: true,
      next: true,
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
      const result = (DEFAULT_VALUE + (timer * difficultyValue));
      scoreGet(result);
    }
  }

  nextQuestion = () => {
    const { indexQuest } = this.state;
    const { history } = this.props;
    const questionFive = 4;
    this.setState((prevState) => ({
      indexQuest: prevState.indexQuest + 1,
      next: !prevState.next,
      classActive: false,
      disabled: false,
    }), () => {
      if (indexQuest === questionFive) {
        history.push('/feedback');
      }
    });
  }

  render() {
    const { questions } = this.props;
    const questionFive = 5;
    const { indexQuest, classActive, disabled, next, timer } = this.state;
    return (
      <div>
        {questions.length > 0 && indexQuest < questionFive
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
              { next
              && (
                <div>
                  <button
                    type="button"
                    data-testid="btn-next"
                    onClick={ this.nextQuestion }
                  >
                    Next
                  </button>
                </div>)}
              <div>
                { next ? <p>{ timer }</p>
                  : (
                    <Timer
                      timeOut={ this.timeOut }
                      timer={ this.timer }
                      stop={ classActive }
                      next={ next }
                    />
                  )}
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

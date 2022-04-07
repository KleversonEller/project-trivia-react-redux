import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

class Feedback extends React.Component {
  playAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <div>
        <Header />
        <h1 data-testid="feedback-text">
          Feedback
        </h1>
        <button
          type="button"
          data-testid="btn-play-again"
          onClick={ this.playAgain }
        >
          Jogar Novamente
        </button>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.func,
  push: PropTypes.func,
}.isRequired;

export default Feedback;

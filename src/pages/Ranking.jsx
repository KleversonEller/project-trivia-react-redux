import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component {
    playAgain = () => {
      const { history } = this.props;
      history.push('/');
    }

    render() {
      return (
        <div>
          <h1 data-testid="ranking-title">Ranking</h1>
          <button
            type="button"
            data-testid="btn-go-home"
            onClick={ this.playAgain }
          >
            Jogar Novamente
          </button>
        </div>
      );
    }
}

Ranking.propTypes = {
  history: PropTypes.func,
  push: PropTypes.func,
}.isRequired;

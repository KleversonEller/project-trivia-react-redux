import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { propPicture, propName, propScore } = this.props;
    return (
      <header>
        <div>
          <img
            src={ propPicture }
            alt="teste"
            data-testid="header-profile-picture"
          />
        </div>
        <div>
          <p data-testid="header-player-name">
            { propName }
          </p>
        </div>
        <div>
          <p data-testid="header-score">
            { propScore }
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  propEmail: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  // propEmail: state.player.gravatarEmail,
  propPicture: state.player.picture,
  propName: state.player.name,
  propScore: state.player.score,
});

export default connect(mapStateToProps)(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { thunkGetToken } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      nick: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.validBtn = this.validBtn.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  validBtn() {
    const { email, nick } = this.state;
    const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validaSenha = nick.length > 0;

    return validaEmail && validaSenha;
  }

  async saveEmail() {
    const { get, history } = this.props;
    const { email, nick } = this.state;
    get(email, nick);
    history.push('/game');
  }

  render() {
    return (
      <form className="form-container">
        <h2> Login </h2>
        <label htmlFor="email">
          <input
            placeholder="E-mail"
            onChange={ this.handleInput }
            name="email"
            data-testid="input-gravatar-email"
            id="email"
            type="text"
          />
        </label>
        <br />
        <label htmlFor="nick">
          <input
            placeholder="Nick"
            onChange={ this.handleInput }
            name="nick"
            data-testid="input-player-name"
            id="nick"
            type="text"
          />
        </label>
        <br />
        <button
          data-testid="btn-play"
          onClick={ this.saveEmail }
          disabled={ !this.validBtn() }
          type="button"
        >
          Play
        </button>
        <Link
          to="settings"
          data-testid="btn-settings"
        >
          Configurações
        </Link>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  get: (email, nick) => dispatch(thunkGetToken(email, nick)),
});

Login.propTypes = {
  getEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

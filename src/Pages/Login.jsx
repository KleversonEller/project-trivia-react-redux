import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../actions';

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

  saveEmail() {
    const { getEmail } = this.props;
    const { email, nick } = this.state;

    getEmail(email, nick);

    // this.setState({ redirect: true });
  }

  render() {
    // const { redirect } = this.state;
    return (
      <>
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
          <div>
            <Link
              to="settings"
              data-testid="btn-settings"
            >
              Configurações
            </Link>
          </div>
        </form>
        {/* {redirect && <Redirect to="/carteira" />} */}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email, nick) => dispatch(getUser(email, nick)),
});

Login.propTypes = {
  getEmail: PropTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);

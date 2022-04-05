import React from 'react';
import { connect } from 'react-redux';

class Game extends React.Component {
  render() {
    return (
      <p> pagina Game </p>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state,
});

export default connect(mapStateToProps)(Game);

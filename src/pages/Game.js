import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Game extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state,
});

export default connect(mapStateToProps)(Game);

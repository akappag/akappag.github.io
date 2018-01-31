import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Overview extends Component {
  capitalize(game) {
     return game.charAt(0).toUpperCase() + game.slice(1);
  }
  render() {
    return (
      <div>
      <h2>{this.props.game.home.name} vs {this.props.game.away.name}</h2>
      <h4>{this.capitalize(this.props.game.game_id)}</h4>
      </div>
    );
  }
}

Overview.propTypes = {
  game: PropTypes.obj
};

export default Overview;

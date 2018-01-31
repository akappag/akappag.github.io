import React, { Component } from 'react';
import Overview from '../Overview/index';
import PropTypes from 'prop-types';
import PeriodTable from '../PeriodTable/index';
import styles from './style.css'

class BoxScore extends Component {
  renderGames(){
    const games = this.props.data.map((game, i) => {
      return (
        <div class = "game">
        <div id="left"><Overview game={game} /></div>
        <div id="right"><PeriodTable game={game} /></div>
        </div>
      );
    });

    return games;
  }

  render() {
    return (<div>{this.renderGames()}</div>);
  }
}

BoxScore.propTypes = {
  data: PropTypes.obj
};

export default BoxScore;

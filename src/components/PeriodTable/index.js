import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoxScore from '../../components/BoxScore/index';
import data from '../../json/static_dump'
import styles from './style.css'

class PeriodTable extends Component {
  renderTableHeaders(){
    const periods = this.props.game.periods.map(period => {
      const points = period.points.map(point => {
        return <h6>{point.points}</h6>
      });
      return (<th>{period.short_name}</th>);
    });
    return (
      <tr><th></th><th></th>{periods}<th>Final</th></tr>
    )
  }
  renderHomeRow(){
    let homeScore = 0;
    let homeTeam = this.props.game.team_home_id;
    let homePeriods;
    const periods = this.props.game.periods.map(period => {
      let homePoints;
      for(var i = 0; i < period.points.length; i = i + 1){
        if(period.points[i].team_id === this.props.game.team_home_id){
          homePoints = period.points[i].points;
          homeScore += parseInt(period.points[i].points);
        }
      }
      return (<td>{homePoints}</td>)
    });
    return (
      <tr><td><img src={this.props.game.home.image} height = "50px" width="50px"/></td><td>{this.props.game.home.name}</td>{periods}<th>{homeScore}</th></tr>
    )
  }

  renderAwayRow(){
    let awayScore = 0;
    let awayTeam = this.props.game.team_away_id;
    let awayPeriods;
    const periods = this.props.game.periods.map(period => {
      let awayPoints;
      for(var i = 0; i < period.points.length; i = i + 1){
        if(period.points[i].team_id === this.props.game.team_away_id){
          awayPoints = period.points[i].points;
          awayScore += parseInt(period.points[i].points);
        }
      }
      return (<td>{awayPoints}</td>)
    });
    return (
      <tr><td><img src={this.props.game.away.image} height = "50px" width="50px"/></td><td>{this.props.game.away.name}</td>{periods}<th>{awayScore}</th></tr>
    )
  }

  renderTableBody(){}
  render() {
    return (
      <table>
      {this.renderTableHeaders()}
      {this.renderHomeRow()}
      {this.renderAwayRow()}
      </table>
    )
  }
}

PeriodTable.propTypes = {
  game: PropTypes.obj
};


export default PeriodTable;

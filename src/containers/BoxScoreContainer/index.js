import React, { Component } from 'react';
import BoxScore from '../../components/BoxScore/index';
import data from '../../json/static_dump'

class BoxScoreContainer extends Component {
  render() {
    return (<BoxScore data={data}/>)
  }
}

export default BoxScoreContainer;


import GaugeChart from 'react-gauge-chart'

import React from 'react';

// import { Container } from './styles';


function Gauge(props) {
  return <GaugeChart id="gauge-chart1"
  nrOfLevels={30} 
  colors={[ "#00FF80","#00361B","#00361B"]} 
  arcWidth={0.3} 
  percent={props.value}
  arcPadding={0.03}

  textColor={'#00361BE'}  />;
}

export default Gauge;
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

import './index.css'



class StatusPedido extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ['Respondido', 'Em Tramitação','Omissões']
        }
      },
      series: [
        {
          name: "series-1",
          data: [1005, 65, 155]
        }
      ]
    };
  }
  render() {
    return (
        <div className="row-chart">
          <div className="bar">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="550"
            />
          </div>
      </div>
    );
  }
}

export default StatusPedido
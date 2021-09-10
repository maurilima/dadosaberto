import React, { Component } from 'react';
import Chart from 'react-apexcharts'

import './index.css'

// var pt-br from "apexcharts/dist/locales/pt-br.json"



class OrderEvolution extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        //   defaultLocale:'pt-br',

        },
        title:{
            text:'Evolução dos Pedidos'
        },
        xaxis: {
            categories: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
          },      },
      series: [
        {
            name: "Pedidos",
            data: [10, 51, 70, 51, 49, 62, 69, 91]        }
        
      ],
  
    //   dataLabels: {
    //     enabled:true
    //   },

    };
  }
  render() {
    return (
        <div className="row-chart-line">
          <div className="bar">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="550"
            />
          </div>
      </div>
    );
  }
}

export default OrderEvolution
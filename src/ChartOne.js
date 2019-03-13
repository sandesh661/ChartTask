import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './ChartScript.js';


class ChartOne extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels : ['Desktop', 'Tablet', 'Mobile'],
        datasets: [
          {
            label: 'Demographics',
            data: [
              104, 62, 44
            ],
            backgroundColor: [
              '#30d6de',
              '#9e1616',
              '#894192'
            ]
          }
        ],
        text: '210'
      },
      options: {
        cutoutPercentage: 60
      }
    }
  }
  render(){
    return(
      <div className="chart-one">
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={70}
          options={this.state.options}
         />
      </div>
    )
  }
}

export default ChartOne;

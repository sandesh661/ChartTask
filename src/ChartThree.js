import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './ChartScript.js';

class ChartThree extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels : ['New user', 'Conversion rate'],
        datasets: [
          {
            label: 'Demographics',
            data: [
              52, 24
            ],
            backgroundColor: [
              '#9e1616',
              '#bdbcbc'
            ]
          }
        ],
        text: '76'
    },
    options: {
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,
    cutoutPercentage: 75
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

export default ChartThree;

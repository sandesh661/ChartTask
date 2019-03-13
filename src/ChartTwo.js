
import React from 'react';
import {Bar} from 'react-chartjs-2';

class ChartTwo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels : ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        datasets: [
          {
            label: 'Demographics',
            data: [
              22, 55, 66, 45 ,32, 23,38,39,75
            ],
            backgroundColor: '#30d6de'
          }
        ]
      }
    }
  }
  render(){
    return(
      <div className="chart-one">
        <Bar
          data={this.state.chartData}
          width={100}
          height={70}
          options={{}}
         />
      </div>
    )
  }
}

export default ChartTwo;

import React, { Component } from 'react';
import './App.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ChartOne from './ChartOne';
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiData : [],
      Alldata : []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event){
      // console.log('Changing...');
      var updatedList = this.state.Alldata;
          updatedList = updatedList.filter((dataobj) => {
                return dataobj.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
          });
          this.setState({apiData: updatedList});
  }

componentDidMount(){
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  fetch(apiUrl, {
    method: "GET"
  }).then(response => response.json()).then( data => {
    this.setState({apiData : data});
    this.setState({Alldata : data});
  });
}

  render() {
    const columns = [
      {
        Header : "Sl.No",
        accessor: "id",
        width:100,
        maxWidth:100,
        minWidth:100
      },
      {
        Header : "Name",
        accessor: "name"
      },
      {
        Header : "Username",
        accessor: "username"
      },
      {
        Header : "Email",
        accessor: "email",
      },
      {
        Header : "Website",
        accessor: "website",
      }
    ]
    return (
      <div className="root-div">
        <div className="all-charts">
            <div className="col-3">
            <ChartOne />
          </div>
          <div className="col-3 middle-col">
            <ChartTwo />
          </div>
          <div className="col-3">
            <ChartThree />
          </div>
        </div>
        <div className="maindiv">
          <div className="tbl-head">
              <span className="tblhead-text">Overview Data</span>
              <span className="searchBtn">
                <input type="text" name="search" className="inputSearch" onChange={this.handleSearch} placeholder="Search.." />
              </span>
          </div>
          <ReactTable
            columns = {columns}
            data = {this.state.apiData}
            defaultPageSize = {5}
            showPagination = {true}
            minRows = {0}
          >

          </ReactTable>
        </div>
      </div>
    );
  }
}

export default App;

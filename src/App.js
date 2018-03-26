import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Chart from "./components/Chart"
let request = require('request')

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  // fetching data
  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Async call for API
    // calling API "hello"
    let options = {
      "url": "https://s3.amazonaws.com/hjhcapstone/data.json",
      "method": "GET"
    }
    // Parse JSON data
    request(options,(err,resp,body)=>{
      var data = JSON.parse(body)
      console.log(data)
    })
    //
    this.setState({
      chartData: {
        labels: ['Bob', 'Alice', 'Mike', 'Ken', 'Yost', 'Collette'],
        datasets: [
            {
                label: 'Probability of Winning',
                data: [
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }
        ]
    }
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">React Chart JS</h1>
        <Chart chartData={this.state.chartData} judge="Thomas Durkin" legendPosition="bottom"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import * as d3 from "d3";


import { select } from 'd3-selection'


const data = [
  {width: 200, height: 100, fill: 'purple'},
  {width: 100, height: 60, fill: 'pink'},
  {width: 50, height: 30, fill: 'red'}
];

class App extends Component {

  componentDidMount(){

    const node = this.node;

    const svg = d3.select(node);

    const rects = svg.selectAll('rect')
    .data(data)
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill)
    .attr('testing', (d,i,n) => {
      //where d is refers to the data parameter 
      //where i is refers to the position that the current array element is in
      //where n is an array of the dom elements
      console.log("-------------d,i,n-------------")
      console.log(d)
      console.log(i)
      console.log(n)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="pink darken-1 section">
            <h2 className="center white-text">D3 Example 2</h2>
            <p className="flow-text grey-text center text-lighten-2"></p>
       </header>
       <svg ref={node => this.node = node}>
          <rect></rect>
          <rect></rect>
          <rect></rect>
       </svg>
      </div>
    );
  }
}

export default App;

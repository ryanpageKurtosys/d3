import React, { Component } from 'react';
import logo from './logo.svg';
import * as d3 from "d3";


import { select } from 'd3-selection'


const data = [
  { data: 200, fill: 'purple'},
  { data: 60, fill: 'pink'},
  { data: 30, fill: 'red'},
  { data: 150, fill: 'blue'},
  { data: 98, fill: 'green'}
];

class App extends Component {

  componentDidMount(){

    const node = this.node;

    const svg = d3.select(node);

    const rects = svg.selectAll('rect')
    .data(data)
    .attr('width', 50)
    .attr('height', d => d.data)
    .attr('fill', d => d.fill)
    .attr('x', (d, i) => i * 70)
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
       {/*this is not practical*/}
          <rect></rect>
          <rect></rect>
          <rect></rect>
       {/*this is not practical*/}
       </svg>
      </div>
    );
  }
}

export default App;

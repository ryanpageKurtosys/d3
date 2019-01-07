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

    rects.attr('width', d => d.width)
  .attr('height', d => d.height)
  .attr('fill', d => d.fill);

  const added = rects.enter()
  .append('rect')
    .attr('width', d => d.width)
    .attr('height', d => d.height)
    .attr('fill', d => d.fill);

  }

  render() {
    return (
      <div className="App">
        <header class="pink darken-1 section">
            <h2 class="center white-text">D3 Example 2</h2>
            <p class="flow-text grey-text center text-lighten-2"></p>
       </header>
       <svg ref={node => this.node = node}/>
      </div>
    );
  }
}

export default App;

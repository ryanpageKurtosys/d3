import React, { Component } from 'react';
import logo from './logo.svg';
import * as d3 from "d3";


import { select } from 'd3-selection'


const dims = { height: 300, width: 300, radius: 150 };
const cent = { x: (dims.width / 2 + 5), y: (dims.height / 2 + 5)};

const colour = d3.scaleOrdinal(d3["schemeSet2"]);

class App extends Component {


  componentDidMount(){

    const node = this.node;

    const svg = d3.select(node)
    .attr('width', dims.width + 150)
    .attr('height', dims.height + 150);

    const graph = d3.select(node)
      .append('g')
      .attr("transform", `translate(${cent.x}, ${cent.y})`);

    const pie = d3.pie()
      .sort(null)
      .value(d => d.cost);

      const data = pie([
        { name: 'rent', cost: 500 },
        { name: 'bills', cost: 300 },
        { name: 'gaming', cost: 200 }
      ]);

      const paths = graph.selectAll('path')
      .data(data);

      const arcPath = d3.arc()
        .outerRadius(dims.radius)
        .innerRadius(dims.radius / 2);
      
      paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('d', arcPath)
        .attr('stroke', '#fff')
        .attr('stroke-width', 3)
        .attr('fill', d => colour(d.data.name));


      //https://naiksoftware.github.io/svg.html
      
  }

  render() {
    return (
      <div className="App">
        <header className="green darken-1 section">
            <h2 className="center white-text">D3 Example 5</h2>
            <p className="flow-text grey-text center text-lighten-2"></p>
       </header>
       <div className='row'>
        <div className='col s3 offset-s4'>
          <svg ref={node => this.node = node}/>
        </div>
       </div>
      
      </div>
    );
  }
}

export default App;

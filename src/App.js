import React, { Component } from 'react';
import logo from './logo.svg';

import { select } from 'd3-selection'


class App extends Component {


  componentDidMount(){

    const node = this.node;

    select(node)
    .attr('width', 600)
    .attr('height', 600);

    const group = select(node)
    .append('g')
    .attr('transform', 'translate(0, 100)');

    group.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20);
  
  group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink');
  
  group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red');


  select(node)
  .append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('hello, devs')
    .style('font-family', 'arial')
    .attr('transform', 'translate(0, -100)');

  }

  render() {
    return (
      <div className="App">
        <header class="pink darken-1 section">
            <h2 class="center white-text">D3 Example 2</h2>
            <p class="flow-text grey-text center text-lighten-2"></p>
       </header>
       <div className="row">
        <div className="col m3 offset-m5">
         <svg ref={node => this.node = node}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;

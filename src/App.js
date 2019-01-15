import React, { Component } from 'react';
import logo from './logo.svg';
import * as d3 from "d3";


import { select } from 'd3-selection'


const data = [
    {name: "burger", orders: 1000, id: "6a3qnC3pxQshRROuR3pZ"},
    {name: "veg soup", orders: 200, id: "7V6D3bc56sXOGn7RHRtk"},
    {name: "veg burger", orders: 500, id: "9GAtWkhaMMTQJlxSSJWf"},
    {name: "veg stew", orders: 900, id: "TxHIQe8TemRHhgUhZHXe"},
    {name: "veg special", orders: 1200, id: "oxFDlC7uoJxRTgDfTXJU"},
  ]
class App extends Component {

  componentDidMount(){

    const node = this.node;

    const svg = d3.select(node);

    const margin = {top: 20, right: 20, bottom: 100, left: 100};
    const graphWidth = 600 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;
    
    const graph = svg.append('g')
      .attr('width', graphWidth)
      .attr('height', graphHeight)
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    // create axes groups
    const xAxisGroup = graph.append('g')
      .attr('transform', `translate(0, ${graphHeight})`)
  
    
    const yAxisGroup = graph.append('g');
    
    const y = d3.scaleLinear()
        .range([graphHeight, 0]);
    
    const x = d3.scaleBand()
      .range([0, graphWidth])
      .paddingInner(0.2)
      .paddingOuter(0.2);
    
    // create & call axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
      .ticks(3)
      .tickFormat(d => d + ' orders');

      const rects = graph.selectAll('rect')
      .data(data);
  
    // remove unwanted rects
    rects.exit().remove();
  
    // update the domains
    y.domain([0, d3.max(data, d => d.orders)]);
    x.domain(data.map(item => item.name));
  
    // add attrs to rects already in the DOM
    rects.attr('width', x.bandwidth)
      .attr("height", d => graphHeight - y(d.orders))
      .attr('fill', 'orange')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.orders));
  
    // append the enter selection to the DOM
    rects.enter()
      .append('rect')
        .attr('width', x.bandwidth)
        .attr("height", d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', (d) => x(d.name))
        .attr('y', d => y(d.orders));
  
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

  }

  render() {
    return (
      <div className="App">
        <header class="pink darken-1 section">
            <h2 class="center white-text">D3 Example 2</h2>
            <p class="flow-text grey-text center text-lighten-2"></p>
       </header>
       <svg width={600} height={600} ref={node => this.node = node}/>
      </div>
    );
  }
}

export default App;

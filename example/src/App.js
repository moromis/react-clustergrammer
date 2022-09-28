import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';
import Clustergrammer from 'react-clustergrammer';
import './App.css';

export default class App extends Component {
  render () {
    const nRow = 100;
    const nCol = 100;
    const nGroupDepth = 10;
    const nLink = 10000;

    return (
      <div style={{ height: "500px", width: "500px"}}>
      <Clustergrammer
        network_data={{
          row_nodes: Array(nRow).fill(0).map((_, i) => ({
            name: `ROW-${i}`,
            clust: i,
            group: Array(nGroupDepth).fill(0).map((_, d) => parseInt(i / 2**d)),
            "cat-0": Math.random() > 0.5 ? "Gender: Female" : "Gender: Male",
            "cat-1": Math.random() > 0.5 ? "Age: >29" : "Age: 80",
          })),
          col_nodes: Array(nCol).fill(0).map((_, i) => ({
            name: `COL-${i}`,
            clust: i,
            group: Array(nGroupDepth).fill(0).map((_, d) => parseInt(i / 2**d)),
          })),
          links: Array(nLink).fill(0).map(_ => ({
            source: parseInt(Math.random()*nRow),
            target: parseInt(Math.random()*nCol),
            value: Math.random() * 2 - 1,
          })),
        }}
        width={800}
        height={600}
      />
      </div>
    )
  }
}

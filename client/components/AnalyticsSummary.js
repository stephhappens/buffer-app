import React, { Component } from 'react';
import actions from  '../actions';
import Analytics from './Analytics';

// class AnalyticsSummary extends Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div className="analytics-bar">

//       </div>
//     )
//     return
//   }
// }

const AnalyticsSummary = (props) => (
  <div className="analytics-bar">
    <Analytics updates={props.updates} />
  </div>
);

export default AnalyticsSummary;

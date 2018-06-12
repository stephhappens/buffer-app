import React, { Component } from 'react';
import actions from  '../actions';
import Analytics from './Analytics';

class AnalyticsSummary extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="analytics-bar">
      {/* Causes infinite loop */}
        {/* {this.props.updates && 
          <AnalyticsSummary updates={this.props.updates} />
        } */}
      </div>
    )
    return
  }
}

export default AnalyticsSummary;

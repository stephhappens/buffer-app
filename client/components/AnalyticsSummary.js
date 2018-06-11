import React, { Component } from 'react';
import actions from  '../actions';
import Analytics from './Analytics';

class AnalyticsSummary extends Component {
  render() {
    return (
      <div className="analytics-bar">
        <div className="update-list">
          <Analytics
            updates = {this.props.updates}
          />
      </div>
      </div>
    )
    return
  }
}

export default AnalyticsSummary;

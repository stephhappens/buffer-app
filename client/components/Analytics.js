import React, { Component } from 'react';

class Analytics extends Component {
  render() {
    return (
      <div className="analytics-bar">
        <ul className="analytics">
          <li className="analytics-totals analytics-posts">30<span className="analytics-type">posts</span></li>
          <span className="analytics-totals analytics-retweets">30<span className="analytics-type">retweets</span></span>
          <li className="analytics-totals analytics-favorites">30<span className="analytics-type">favorites</span></li>
          <li className="analytics-totals analytics-clicks">30<span className="analytics-type">clicks</span></li>

          {/* TODO: Debug why these are returning undefined */}
          {{/* {this.props.map(function(update, index) {
          return <li className="analytics__summary -favorites" key={index}>{update.statistics.favorites}</li>
        })} */}
        </ul>
      </div>
    )
    return
  }
}

export default Analytics;

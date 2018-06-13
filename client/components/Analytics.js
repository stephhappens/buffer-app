import React, { Component } from 'react';

class Analytics extends Component {
  summary() {
    const { updates } = this.props;

    // Create reducer 
    return updates.reduce((acc, val) => {
      // Destructure updates to only pass statistics
      const { statistics } = val;

      if (! statistics) {
        return acc;
      }

      acc.clicks += parseInt(statistics.clicks);
      acc.favorites += parseInt(statistics.favorites);
      acc.retweets += parseInt(statistics.retweets);
  
      return acc;
    }, { posts: updates.length, clicks: 0, favorites: 0, retweets: 0 });

    return { posts: updates.length, clicks: 0, favorites: 0, retweets: 0 };
  }
  render() {
    const { clicks, favorites, posts, retweets } = this.summary();

    return (
      <div className="analytics-bar" role="complementary">
        <ul className="analytics">
          <li className="analytics-totals analytics-posts">{posts}<span className="analytics-type">posts</span></li>
          <li className="analytics-totals analytics-retweets">{retweets}<span className="analytics-type">retweets</span></li>
          <li className="analytics-totals analytics-favorites">{favorites}<span className="analytics-type">favorites</span></li>
          <li className="analytics-totals analytics-clicks">{clicks}<span className="analytics-type">clicks</span></li>
        </ul>
      </div>
    )
    return
  }
}

export default Analytics;

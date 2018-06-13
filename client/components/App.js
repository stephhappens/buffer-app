import React, { Component } from 'react';
import UpdateList from './UpdateList';
import AnalyticsSummary from './AnalyticsSummary';

class App extends Component {

  render() {
    return (
      <div className="app" role="banner">
        <img
          src="/logo-buffer.svg"
          alt="Buffer"
          className="logo"
          role="img"
        />
        <div className="main-container" role="main">
          <UpdateList
            updatesLoadedAll={this.props.updatesLoadedAll}
            // Passing Store Data
            updates={this.props.updates}
            end={this.props.end}
            dispatch={this.props.dispatch}
          />
          <AnalyticsSummary
            updates={this.props.updates}
          />
        </div>
      </div>
    );
  }
}

export default App;

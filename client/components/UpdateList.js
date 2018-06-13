import React, { Component } from 'react';
import actions from  '../actions';
import Update from  './Update';

class UpdateList extends Component {
  constructor(props) {
    super(props);

    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.props.dispatch({ type: 'LOAD_MORE' });
  }

  render() {
    if (this.props.end) {
      return <p>You have no updates</p>
    }
    return (
      <div className="update-list">
        {this.props.updates.map((update, idx) => (
          <Update
            {...update}
            key={idx}
          />
        ))}
        {!this.props.end &&
          <button className="load-more" role="button" onClick={this.loadMore}>Load More</button>
        }
      </div>
    )
    return
  }
}

export default UpdateList;

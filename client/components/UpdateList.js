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

  // componentWillMount() {
    // TODO: This isn't correct figure out how to grab more data from api
  //   $get(Update, (res, status) => {
  //     if (status === 'success') {
  //       this.setState({
  //         items: res,
  //         loaded: true
  //       });
  //     } else {
  //       console.log(status);
  //       this.setState({
  //         error: true
  //       });
  //     }
  //   });
  // }
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
          <button className="load-more" onClick={this.loadMore}>Load More!</button>
        }
      </div>
    )
    return
  }
}

export default UpdateList;

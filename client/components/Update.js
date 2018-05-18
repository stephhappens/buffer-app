import React, { Component } from 'react';

class Update extends Component {

  renderImage(media) {
    if (!media || !media.thumbnail) {
      return '';
    }
    return (
      <img
        className="update-image"
        src={media.thumbnail}
      />
    )
  }

  render() {
    return (
      <div className="update">
        <div className="update-contents">
          <p className="update-text" dangerouslySetInnerHTML={{ __html: this.props.text_formatted }}></p>
          {this.renderImage(this.props.media)}
        </div>
        <div className="update-info">
          <div>{this.props.day} at {this.props.due_time}</div>
          <div>Added by {this.props.user.name}</div>
        </div>
      </div>
    );
  }

}

export default Update;

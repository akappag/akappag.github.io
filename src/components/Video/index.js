import React, { Component } from 'react';
import PropTypes from 'prop-types';
import questions from '../../json/static_dump';
import YouTube from 'react-youtube';


class Video extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div>
      <YouTube
        videoId={questions[this.props.number].videoId}
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

Video.propTypes = {
  number: PropTypes.number
};

export default Video;

import React from "react";
import PropTypes from "prop-types";

const VideoPlayer = (props) => {
  const {poster, videoRef, videoPreview} = props;
  return (
    <video
      ref={videoRef}
      poster={poster}
      width="280"
      height="175"
      src={videoPreview}
      muted
    >
    </video>
  );
};

VideoPlayer.propTypes = {
  poster: PropTypes.string,
  videoPreview: PropTypes.string,
  videoRef: PropTypes.object,
};

export default VideoPlayer;

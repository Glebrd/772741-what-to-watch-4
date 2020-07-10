import React from "react";
import withVideo from "../../hocs/with-video/with-video";
import PlayerControls from "../player-controls/player-controls.jsx";
import PropTypes from "prop-types";
import {movieType} from "../../types";

const PlayerPage = (props)=>{
  const {currentMovie, videoRef, onPlayPause, onFullScreen, isPlaying, onExit} = props;
  const {poster, videoPreview, title} = currentMovie;
  return (
    <div className="player">
      <video
        src={videoPreview}
        ref={videoRef}
        className="player__video" poster={poster}
      >
      </video>

      <button
        onClick = {onExit}
        type="button" className="player__exit">Exit
      </button>

      <div className="player__controls">

        <PlayerControls
          videoRef={videoRef}
        />

        <div className="player__controls-row">
          <button
            onClick={onPlayPause}
            type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying
                ? `#pause`
                : `#play-s`}
              ></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>

          <button
            onClick={onFullScreen}
            type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerPage.propTypes = {
  currentMovie: movieType,
  videoRef: PropTypes.object,
  onPlayPause: PropTypes.func,
  onFullScreen: PropTypes.func,
  isPlaying: PropTypes.bool,
  onExit: PropTypes.func,
};

export {PlayerPage};
export default withVideo(PlayerPage);

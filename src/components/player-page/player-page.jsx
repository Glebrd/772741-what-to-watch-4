import React from "react";
import withVideo from "../../hocs/with-video/with-video";
import PlayerControls from "../player-controls/player-controls.jsx";
import PropTypes from "prop-types";
import {movieType} from "../../types";
import history from "../../history";
import {getCurrentMovie, getCurrentMovieByID} from "../../reducer/application/selectors";
import {connect} from "react-redux";
import {getMovies} from "../../reducer/data/selectors";
import {Link} from "react-router-dom";

const getSvgIconPlayPause = (isPlaying) =>
  isPlaying
    ? `#pause`
    : `#play-s`;

const PlayerPage = (props)=>{
  const {currentMovie, videoRef, onPlayPause, onFullScreen, isPlaying, history} = props;
  const {picture, videoLink, title} = currentMovie;
  return (
    <div className="player">
      <video
        src={videoLink}
        ref={videoRef}
        className="player__video" poster={picture}
      >
      </video>


      <button
        onClick={history.goBack}
        type="button" className="player__exit">Exit </button>


      <div className="player__controls">

        <PlayerControls
          videoRef={videoRef}
        />

        <div className="player__controls-row">
          <button
            onClick={onPlayPause}
            type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={getSvgIconPlayPause(isPlaying)}
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


const mapStateToProps = (state, props) => ({
  currentMovie: getCurrentMovieByID(state, props.match.params.id),
});

export {PlayerPage};

export default connect(mapStateToProps)(withVideo(PlayerPage));

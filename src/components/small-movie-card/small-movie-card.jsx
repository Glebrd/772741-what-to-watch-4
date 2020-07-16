import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {MOVIE_WAIT} from "../../const.js";
import {ActionCreator} from "../../reducer/application/application";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {ScreenType} from "../../const";
import {movieType} from "../../types";

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._timeout = null;
    this._videoRef = React.createRef();
  }
  _handleMovieCardHover() {
    this._timeout = setTimeout(() => {
      this._videoRef.current.play();
    }, MOVIE_WAIT);
  }

  _handleMovieCardUnhover() {
    clearTimeout(this._timeout);
    this._videoRef.current.load();
  }
  componentWillUnmount() {
    clearTimeout(this._timeout);
  }
  render() {
    const {smallMovieCard, onCardClick} = this.props;
    const {picture, title, videoPreview} = smallMovieCard;
    return (
      <article
        onMouseEnter={() => {
          this._handleMovieCardHover();
        }}
        onMouseLeave={() => {
          this._handleMovieCardUnhover();
        }}
        onClick={(evt) => {
          evt.preventDefault();
          onCardClick(smallMovieCard);
        }}
        className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <VideoPlayer
            videoRef={this._videoRef}
            poster={picture}
            videoPreview = {videoPreview}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCardClick(currentMovie) {
    dispatch(ActionCreator.setCurrentMovie(currentMovie));
    dispatch(ActionCreator.setCurrentScreen(ScreenType.MOVIE));
    dispatch(Operation.loadComments(currentMovie));
  },
});

SmallMovieCard.propTypes = {
  smallMovieCard: movieType,
  onCardClick: PropTypes.func,
};

export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);

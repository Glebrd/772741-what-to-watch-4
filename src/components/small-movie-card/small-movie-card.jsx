import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {MOVIE_WAIT} from "../../const.js";
import {movieType} from "../../types";
import {Link} from "react-router-dom";


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
        <Link
          to={`/films/${smallMovieCard.id}`}
        >
          <div className="small-movie-card__image">
            <VideoPlayer
              videoRef={this._videoRef}
              poster={picture}
              videoPreview = {videoPreview}
            />
          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            to={`/films/${smallMovieCard.id}`}
          >{title}        </Link>
        </h3>
      </article>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   onCardClick(currentMovie) {
//     dispatch(ActionCreator.setCurrentMovie(currentMovie));
//     dispatch(Operation.loadComments(currentMovie));
//   },
// });

SmallMovieCard.propTypes = {
  smallMovieCard: movieType,
  onCardClick: PropTypes.func,
};

export {SmallMovieCard};
export default SmallMovieCard;

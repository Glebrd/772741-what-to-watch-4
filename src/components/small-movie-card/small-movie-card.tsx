import * as React from "react";
import VideoPlayer from "../video-player/video-player";
import {MOVIE_WAIT, AppRoute} from "../../const";
import {MovieType} from "../../types";
import {Link} from "react-router-dom";
import {RefObject} from "react";

interface Props {
  smallMovieCard: MovieType;
}
class SmallMovieCard extends React.PureComponent<Props> {
  private _videoRef: RefObject<HTMLVideoElement>;
  private _timeout: ReturnType<typeof setTimeout>;
  constructor(props) {
    super(props);

    this._timeout = null;
    this._videoRef = React.createRef();
  }
  componentWillUnmount() {
    console.log(this._timeout);
    clearTimeout(this._timeout);
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
  render() {
    const {smallMovieCard} = this.props;
    const {picture, title, videoPreview} = smallMovieCard;
    return (
      <article
        onMouseEnter={() => {
          this._handleMovieCardHover();
        }}
        onMouseLeave={() => {
          this._handleMovieCardUnhover();
        }}
        className="small-movie-card catalog__movies-card">
        <Link
          to={AppRoute.MOVIES + smallMovieCard.id}
        >
          <div className="small-movie-card__image">
            <VideoPlayer
              videoRef={this._videoRef}
              poster={picture}
              videoPreview={videoPreview}
            />
          </div>
        </Link>
        <h3 className="small-movie-card__title">
          <Link
            className="small-movie-card__link"
            to={AppRoute.MOVIES + smallMovieCard.id}
          >
            {title}
          </Link>
        </h3>
      </article>
    );
  }
}

export {SmallMovieCard};
export default SmallMovieCard;

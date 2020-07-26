import * as React from "react";
import {formatDuration} from "../../utils";

const MovieCardTabDetails = (props) => {
  const {runTime, starring, director, date, genre} = props;

  const runTimeFormated = formatDuration(runTime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.reduce((all, current, i) =>
              [all, <br key={i} />, current]
            )}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTimeFormated}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{date}</span>
        </p>
      </div>
    </div>
  );
};

// MovieCardTabDetails.propTypes = {
//   genre: PropTypes.string,
//   date: PropTypes.number,
//   director: PropTypes.string,
//   starring: PropTypes.arrayOf(PropTypes.string),
//   runTime: PropTypes.number,
// };


export default MovieCardTabDetails;

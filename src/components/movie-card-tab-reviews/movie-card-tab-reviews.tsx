import * as React from "react";
import * as moment from "moment";

const MovieCardTabReviews = (props) => {
  const {comments} = props;
  const secondColumnStart = Math.ceil(comments.length / 2);
  const formatDate = (date) => moment(date).format(`MMMM DD, YYYY`);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.slice(0, secondColumnStart || 1).map((comment) =>
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.name}</cite>
                <time className="review__date" dateTime="2015-11-18">{formatDate(comment.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        )}
      </div>
      <div className="movie-card__reviews-col">
        {comments.slice(secondColumnStart).map((comment) =>
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.name}</cite>
                <time className="review__date" dateTime="2015-11-18">{formatDate(comment.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        )}
      </div>
    </div>
  );
};

// MovieCardTabReviews.propTypes = {
//   comments: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     user: PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//     }),
//     rating: PropTypes.number,
//     comment: PropTypes.string,
//     date: PropTypes.string,
//   }))
// };

export default MovieCardTabReviews;

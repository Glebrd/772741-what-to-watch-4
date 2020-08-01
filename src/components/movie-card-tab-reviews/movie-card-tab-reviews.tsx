import * as React from "react";
import * as moment from "moment";
import {CommentType} from "../../types";

export const DefaultColumnStart = {
  FIRST: 0,
  SECOND: 1,
};

interface Props {
comments: CommentType[];
}

const MovieCardTabReviews: React.FunctionComponent<Props> = (props: Props) => {
  const {comments} = props;
  const secondColumnStart = Math.ceil(comments.length / 2);
  const formatDate = (date) => moment(date).format(`MMMM DD, YYYY`);
  const getDateTimeAttribute = (date) => moment(date).format(`YYYY-MM-DD`);

  console.log(secondColumnStart);
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.slice(DefaultColumnStart.FIRST, secondColumnStart || DefaultColumnStart.SECOND).map((comment) =>
          <div key={comment.id} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime={getDateTimeAttribute(comment.date)}>{formatDate(comment.date)}</time>
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
                <cite className="review__author">{comment.user.name}</cite>
                <time className="review__date" dateTime={getDateTimeAttribute(comment.date)}>{formatDate(comment.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCardTabReviews;

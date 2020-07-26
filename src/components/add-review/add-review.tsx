import * as React from "react";
import withReviewValidation from "../../hocs/with-review-validation/with-review-validation";
import UserBlock from "../user-block/user-block";
import {MovieType} from "../../types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

interface Props {
  currentMovie: MovieType;
  onReviewChange: () => void;
  onSubmit: () => void;
  onRatingChange: () => void;
  ratingIsValid: boolean;
  reviewIsValid: boolean;
  networkError: boolean;
  isLoading: boolean;
}

const AddReview: React.FunctionComponent<Props> = (props: Props) => {
  const {onRatingChange, onReviewChange, onSubmit, reviewIsValid, ratingIsValid, currentMovie, isLoading, networkError} = props;
  const {title, background, poster, backgroundColor} = currentMovie;
  return (
    <section
      style={{backgroundColor}}
      className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.MOVIES + currentMovie.id} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <UserBlock/>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={title} width="218"
            height="327"/>
        </div>
      </div>
      <div className="add-review">
        {networkError &&
        <div className="sign-in__message">
          <p>Error occured {networkError}</p>
        </div>}
        <form
          onSubmit={onSubmit}
          action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              <input
                onChange={onRatingChange}
                className="rating__input" id="star-1" type="radio" name="rating" value="1"/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input
                onChange={onRatingChange}
                className="rating__input" id="star-2" type="radio" name="rating" value="2"/>
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input
                onChange={onRatingChange}
                className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input
                onChange={onRatingChange}
                className="rating__input" id="star-4" type="radio" name="rating" value="4"/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input
                onChange={onRatingChange}
                className="rating__input" id="star-5" type="radio" name="rating" value="5"/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              onChange={onReviewChange}
              disabled={isLoading}
              className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button
                disabled={!reviewIsValid && ratingIsValid || isLoading}
                className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

export {AddReview};

// export default withReviewValidation(AddReview);
export default AddReview;

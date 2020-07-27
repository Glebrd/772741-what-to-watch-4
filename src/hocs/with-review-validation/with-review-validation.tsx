import * as React from "react";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {MovieType} from "../../types";
import history from "../../history";
import {getCurrentMovieByID} from "../../reducer/application/selectors";
import {AppRoute} from "../../const";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

const validateReview = (review) => {
  return review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH;
};

interface Props {
  onUploadReview: (currentMovie: MovieType, review: string, rating: number) => Promise<{message: string; status: number}>;
  currentMovie: MovieType;
}

interface State {
  review: string;
  rating: number;
  reviewIsValid: boolean;
  ratingIsValid: boolean;
  isLoading: boolean;
  networkError: string | boolean;
}

const withReviewValidation = (Component) => {
  class WithReviewValidation extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);

      this.state = {
        review: ``,
        rating: 3,
        reviewIsValid: false,
        ratingIsValid: true,
        isLoading: false,
        networkError: false,
      };
    }
    _handleReviewChange(evt) {
      const {value} = evt.target;
      this.setState({
        review: value,
        reviewIsValid: validateReview(value),
      });
    }
    _handleRatingChange(evt) {
      const {value} = evt.target;
      this.setState({
        rating: value,
        ratingIsValid: !!value,
      });
    }
    _handleSubmit(evt) {
      evt.preventDefault();
      const {onUploadReview, currentMovie} = this.props;
      const {review, rating} = this.state;

      this.setState((state) => ({
        isLoading: !state.isLoading,
      }));

      onUploadReview(currentMovie, review, rating)
        .then((response) => {
          if (response.status !== 200) {
            this.setState((state) => ({
              isLoading: !state.isLoading,
              networkError: response.message
            }));
          } else {
            this.setState((state) => ({
              isLoading: !state.isLoading,
              networkError: false,
            }));
            history.push(AppRoute.MOVIES + currentMovie.id);
          }
        });
    }

    render() {
      const {ratingIsValid, reviewIsValid, isLoading, networkError} = this.state;
      const {currentMovie} = this.props;

      return <Component
        {...this.props}
        ratingIsValid={ratingIsValid}
        reviewIsValid={reviewIsValid}
        isLoading={isLoading}
        onRatingChange={this._handleRatingChange}
        onReviewChange={this._handleReviewChange}
        onSubmit={this._handleSubmit}
        currentMovie={currentMovie}
        networkError={networkError}
      />;
    }
  }

  const mapStateToProps = (state, props) => ({
    currentMovie: getCurrentMovieByID(state, props.match.params.id),
  });

  const mapDispatchToProps = {
    onUploadReview: Operation.uploadReview,
  };

  const ConnectedWithReviewValidation = connect(mapStateToProps, mapDispatchToProps)(WithReviewValidation);

  return ConnectedWithReviewValidation;
};

export {withReviewValidation};

export default withReviewValidation;

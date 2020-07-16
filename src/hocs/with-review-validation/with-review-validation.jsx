import React from "react";
import {Operation} from "../../reducer/data/data";
import {connect} from "react-redux";
import {getMovies} from "../../reducer/data/selectors";
import {compose} from "redux";

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 400;

// const validateRating = (rating) => {
//   return rating;
// };

const validateReview = (review) => {
  return review.length >= MIN_REVIEW_LENGTH && review.length <= MAX_REVIEW_LENGTH;
};

const withReviewValidation = (Component) => {
  class WithReviewValidation extends React.PureComponent {
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
    // componentWillMount() {
    //   setTimeout(Math.random(1), 5000);
    // }
    _handleReviewChange(evt) {
      const {value} = evt.target;
      console.log(this.state);
      this.setState({
        review: value,
        reviewIsValid: validateReview(value),
      });
    }
    _handleRatingChange(evt) {
      const {value} = evt.target;
      // console.log(this.state);
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
          if (!response.data) {
            this.setState({networkError: response.message});
            console.log(this.state);
          } else {
            this.setState({networkError: false});
          }
          this.setState((state) => ({
            isLoading: !state.isLoading,
          }));
          console.log(this.state);
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

  return WithReviewValidation;
};

const mapStateToProps = (state) => ({
  // Временно, чтоб работал маршрут /dev-review
  currentMovie: getMovies(state)[2],
});

const mapDispatchToProps = {
  onUploadReview: Operation.uploadReview,
};

// export default connect(mapStateToProps, mapDispatchToProps)(withReviewValidation);
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withReviewValidation
);


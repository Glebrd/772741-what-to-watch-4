import React from "react";
import withTabs from "../../hocs/with-tabs/with-tabs.js";
import MovieCardTabOverview from "../movie-card-tab-overview/movie-card-tab-overview.jsx";
import MovieCardTabDetails from "../movie-card-tab-details/movie-card-tab-details.jsx";
import MovieCardTabReviews from "../movie-card-tab-reviews/movie-card-tab-reviews.jsx";
import {Tabs} from "../../const";
import PropTypes from "prop-types";
import {commentType, movieType} from "../../types";
import {getComments} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data";

const DEFAULT_ACTIVE_ITEM = Tabs.OVERVIEW;
class MovieCardTabs extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onReviewsTabClick(this.props.movie);
  }
  render() {
    const {movie, onChangeTab, activeTab, comments} = this.props;
    const {rating, description, starring, director, scores, date, runTime, genre} = movie;
    let currentlyActiveTab = activeTab ? activeTab : DEFAULT_ACTIVE_ITEM;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">

            <li className= {`movie-nav__item ${currentlyActiveTab === Tabs.OVERVIEW ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeTab(`Overview`);
                }}
              >
              Overview
              </a>
            </li>
            <li className= {`movie-nav__item ${currentlyActiveTab === Tabs.DETAILS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeTab(`Details`);
                }}
              >
              Details
              </a>
            </li>
            <li className= {`movie-nav__item ${currentlyActiveTab === Tabs.REVIEWS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onChangeTab(`Reviews`);
                }}
              >
              Reviews
              </a>
            </li>

          </ul>
        </nav>
        {(() => {
          switch (currentlyActiveTab) {
            case Tabs.OVERVIEW:
              return (
                <MovieCardTabOverview
                  rating={rating}
                  description={description}
                  starring={starring}
                  director={director}
                  scores={scores}
                />);
            case Tabs.DETAILS:
              return (
                <MovieCardTabDetails
                  starring={starring}
                  runTime={runTime}
                  director={director}
                  date={date}
                  genre={genre}
                />);
            case Tabs.REVIEWS:
              return (
                <MovieCardTabReviews
                  comments={comments}
                />);
            default:
              return null;
          }
        })()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewsTabClick(movie) {
    dispatch(Operation.loadComments(movie));
  },
});

MovieCardTabs.propTypes = {
  movie: movieType,
  activeTab: PropTypes.string,
  onChangeTab: PropTypes.func,
  comments: PropTypes.arrayOf(commentType),
  onReviewsTabClick: PropTypes.func,
};

export {MovieCardTabs};

export default connect(mapStateToProps, mapDispatchToProps)(withTabs(MovieCardTabs));

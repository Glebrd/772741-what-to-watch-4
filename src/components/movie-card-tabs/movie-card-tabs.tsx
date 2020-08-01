import * as React from "react";
import withTabs from "../../hocs/with-tabs/with-tabs";
import MovieCardTabOverview from "../movie-card-tab-overview/movie-card-tab-overview";
import MovieCardTabDetails from "../movie-card-tab-details/movie-card-tab-details";
import MovieCardTabReviews from "../movie-card-tab-reviews/movie-card-tab-reviews";
import {Tab, Tabs} from "../../const";
import {CommentType, MovieType} from "../../types";
import {getComments} from "../../reducer/data/selectors";
import {connect} from "react-redux";
import {Operation} from "../../reducer/data/data";

const DEFAULT_ACTIVE_ITEM = Tab.OVERVIEW;

interface Props {
  movie: MovieType;
  activeTab: string;
  onChangeTab: (tabNameValue: string) => {void};
  comments: CommentType[];
  onReviewsLoad: (movie: MovieType) => void;
}

class MovieCardTabs extends React.PureComponent <Props> {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.onReviewsLoad(this.props.movie);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.movie !== this.props.movie) {
      this.props.onReviewsLoad(this.props.movie);
    }
  }
  render() {
    const {movie, onChangeTab, activeTab, comments} = this.props;
    const {rating, description, starring, director, scores, date, runTime, genre} = movie;
    const currentlyActiveTab = activeTab ? activeTab : DEFAULT_ACTIVE_ITEM;
    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {Array.from(Tabs).map(([tabNameKey, tabNameValue]) => {
              return (
                <li
                  key={tabNameKey}
                  className= {`movie-nav__item ${currentlyActiveTab === tabNameValue ? `movie-nav__item--active` : ``}`}>
                  <a href="#!" className="movie-nav__link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      onChangeTab(tabNameValue);
                    }}
                  >
                    {tabNameValue}
                  </a>
                </li>
              );
            })}

          </ul>
        </nav>
        {(() => {
          switch (currentlyActiveTab) {
            case Tab.OVERVIEW:
              return (
                <MovieCardTabOverview
                  rating={rating}
                  description={description}
                  starring={starring}
                  director={director}
                  scores={scores}
                />);
            case Tab.DETAILS:
              return (
                <MovieCardTabDetails
                  starring={starring}
                  runTime={runTime}
                  director={director}
                  date={date}
                  genre={genre}
                />);
            case Tab.REVIEWS:
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
  onReviewsLoad(movie) {
    dispatch(Operation.loadComments(movie));
  },
});

export {MovieCardTabs};

export default connect(mapStateToProps, mapDispatchToProps)(withTabs(MovieCardTabs));

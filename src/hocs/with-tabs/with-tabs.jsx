import React from "react";
import {Tabs} from "../../const";
import PropTypes from "prop-types";

const withTabs = (Component) => {
  class WithTabs extends React.PureComponent {
    constructor(props) {
      super(props);
      const {movie} = props;
      this.lastMovie = movie;

      this.state = {
        currentTab: Tabs.OVERVIEW
      };

      this._handleTabSwitch = this._handleTabSwitch.bind(this);
    }
    _handleTabSwitch(tab) {
      this.setState({currentTab: tab});
    }
    componentDidUpdate() {
      const currentMovie = this.props.movie;
      if (this.lastMovie !== currentMovie) {
        this.setState({
          currentTab: Tabs.OVERVIEW
        });
        this.lastMovie = currentMovie;
      }
    }

    render() {
      const {currentTab} = this.state;

      return (
        <Component
          {...this.props}
          active={currentTab}
          onChangeTab={this._handleTabSwitch}
        />
      );
    }
  }

  WithTabs.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string,
      picture: PropTypes.string,
      genre: PropTypes.string,
      date: PropTypes.string,
      poster: PropTypes.string,
      background: PropTypes.string,
      rating: PropTypes.number,
      scores: PropTypes.number,
      director: PropTypes.string,
      starring: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      videoPreview: PropTypes.string,
      runTime: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
        }),
        rating: PropTypes.number,
        comment: PropTypes.string,
        date: PropTypes.string,
      }))
    }),
  };
  return WithTabs;
};
export default withTabs;

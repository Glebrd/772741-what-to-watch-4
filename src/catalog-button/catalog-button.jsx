import React from "react";
import {ActionCreator} from "../reducer";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const CatalogButton = (props)=>{
  const {increaseNumberOfMovies} = props;
  return (
    <button
      onClick={increaseNumberOfMovies}
      className="catalog__button" type="button">Show more
    </button>
  );
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  increaseNumberOfMovies() {
    dispatch(ActionCreator.increaseNumberOfMoviesOnMain(8));
  },
});

CatalogButton.propTypes = {
  increaseNumberOfMovies: PropTypes.func,
};

export {CatalogButton};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogButton);

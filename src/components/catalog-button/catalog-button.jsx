import React from "react";
import {ActionCreator} from "../../reducer/application/application";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCurrentGenre} from "../../reducer/application/selectors";

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
  currentGenre: getCurrentGenre(state),
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

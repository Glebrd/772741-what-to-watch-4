import React from "react";
import {ActionCreator} from "../../reducer/application/application";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCurrentGenre} from "../../reducer/application/selectors";

const CatalogButton = (props)=>{
  const {onCatalogButtonClick} = props;
  return (
    <button
      onClick={onCatalogButtonClick}
      className="catalog__button" type="button">Show more
    </button>
  );
};

CatalogButton.propTypes = {
  onCatalogButtonClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentGenre: getCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCatalogButtonClick() {
    dispatch(ActionCreator.increaseNumberOfMoviesOnMain(8));
  },
});

export {CatalogButton};
export default connect(mapStateToProps, mapDispatchToProps)(CatalogButton);

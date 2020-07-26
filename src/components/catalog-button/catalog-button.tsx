import * as React from "react";
import {ActionCreator} from "../../reducer/application/application";
import {connect} from "react-redux";
import {getCurrentGenre} from "../../reducer/application/selectors";

interface Props {
  onCatalogButtonClick: () => {};
}

const CatalogButton: React.FunctionComponent<Props> = (props: Props) => {
  const {onCatalogButtonClick} = props;
  return (
    <button
      onClick={onCatalogButtonClick}
      className="catalog__button" type="button">Show more
    </button>
  );
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

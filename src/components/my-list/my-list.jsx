import React from "react";
import PropTypes from "prop-types";
import {getFavoriteMovies} from "../../reducer/application/selectors";
import {connect} from "react-redux";
import MoviesList from "../movies-list/movies-list.jsx";
import {movieType} from "../../types";
import UserBlock from "../user-block/user-block.jsx";
import {Link} from "react-router-dom";

const MyList = (props) => {

  const {favoriteMovies} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock/>

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList
          movies={favoriteMovies}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

MyList.propTypes = {
  favoriteMovies: PropTypes.arrayOf(movieType),
};

const mapStateToProps = (state) => ({
  favoriteMovies: getFavoriteMovies(state),
});

export {MyList};
export default connect(mapStateToProps)(MyList);

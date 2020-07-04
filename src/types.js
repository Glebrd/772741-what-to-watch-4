import PropTypes from "prop-types";

export const movieType = PropTypes.shape({
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
});
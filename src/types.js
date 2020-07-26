import PropTypes from "prop-types";

interface MovieType {
  title: string;
  picture: string;
  genre: string;
  date: number;
  poster: string;
  background: string;
  rating: number;
  scores: number;
  director: string;
  starring: string[];
  description: string;
  videoPreview: string;
  runTime: number;
});

export const userType = PropTypes.shape({
  id: PropTypes.number,
  email: PropTypes.string,
  name: PropTypes.string,
  avatarURL: PropTypes.string,
});

export const commentType = PropTypes.shape({
  id: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  rating: PropTypes.number,
  comment: PropTypes.string,
  date: PropTypes.string,
});


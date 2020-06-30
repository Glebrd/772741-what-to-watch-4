import React from "react";
import renderer from "react-test-renderer";
import MovieCardTabReviews from "./movie-card-tab-reviews";

const movie = {
  id: 124,
  title: `Se7en`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Thriller`,
  date: `1995`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 7.9,
  scores: 685,
  director: `Chic Alvar`,
  starring: [`Padraic Wetheril`, `Gnni Fenkel`, `Ichabod Kuhlen`, `Andy MacRanald`],
  description: `Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.`,
  videoPreview: `https: //upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `2h 07m`,
  comments: [{
    id: 1,
    user: {
      id: 562,
      name: `Leila Boswood`,
    },
    rating: 9,
    comment: ` Se7en is well crafted and ingeniously clever, making it one of the greatest films of the 90's`,
    date: `March 16, 2010`
  }, {
    id: 2,
    user: {
      id: 248,
      name: `Melvin Dutteridge`,
    },
    rating: 8,
    comment: `Dark and disturbing thriller that will stay with you forever.`,
    date: `July 22, 2015`
  }, {
    id: 3,
    user: {
      id: 182,
      name: `Ely Ernke`,
    },
    rating: 10,
    comment: `One of the best-made films of its era and genre`,
    date: `November 10, 2008`
  }]
};

const {comments} = movie;

it(`Movie card tab reviews renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardTabReviews
          comments={comments}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});

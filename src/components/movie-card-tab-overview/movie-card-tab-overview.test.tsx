import React from "react";
import renderer from "react-test-renderer";
import MovieCardTabOverview from "./movie-card-tab-overview";

const movie = {
  id: 634,
  title: `The Truman Show`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  date: `1998`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 7.2,
  scores: 941,
  director: `Louise Virgoe`,
  starring: [`Pamela Anthiftle`, `Arlene Cordelle`, `Arleen Portriss`, `Christy Hullin`],
  description: `An insurance salesman discovers his whole life is actually a reality TV show.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `1h 43m`,
  comments: [{
    id: 1,
    user: {
      id: 602,
      name: `Erasmus Leechman`,
    },
    rating: 10,
    comment: `I  love the dialogue, camera shot, performances, direction, music, and running time of this movie. There is nothing I would do to change it. `,
    date: `March 18, 2009`
  }, {
    id: 2,
    user: {
      id: 48,
      name: `Arnuad Maggiore`,
    },
    rating: 8,
    comment: `I asked a friend to describe The Truman Show. He said, "No, it's not a comedy, well...not exactly." I didn't quite understand until I watched it myself. Truman takes on a tone quite different than any parody/comedies I've seen lately. The point (the media and its destructive powers) is subtlely relayed through dark humor, and you don't feel like the director is smashing you over the head with his morals.`,
    date: `May 29, 2017`
  }, {
    id: 3,
    user: {
      id: 12,
      name: `Robers Fitzpayn`,
    },
    rating: 10,
    comment: `Tru(man)ly remarkable!`,
    date: `November 12, 2014`
  }]
};

const {rating, description, starring, director, scores} = movie;

it(`Movie card tab overview component renders`, () => {
  const tree = renderer
    .create(
        <MovieCardTabOverview
          rating={rating}
          description={description}
          starring={starring}
          director={director}
          scores={scores}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});

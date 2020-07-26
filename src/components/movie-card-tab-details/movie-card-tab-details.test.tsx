import React from "react";
import renderer from "react-test-renderer";
import MovieCardTabDetails from "./movie-card-tab-details";

const movie = {
  id: 634,
  title: `Game`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Thrller`,
  date: 1997,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8.3,
  scores: 1052,
  director: `Gardiner Stanton`,
  starring: [`Bunnie Litchmore`, `Philippine Tick`, `Paige Keasey`, `Kikelia Agar`],
  description: `After a wealthy banker is given an opportunity to participate in a mysterious game, his life is turned upside down when he becomes unable to distinguish between the game and reality.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 95,
  comments: [{
    id: 1,
    user: {
      id: 633,
      name: `Willi Gabitis`,
    },
    rating: 9,
    comment: `"The Game" took me on one psychological thrill ride after another loaded with twists and turns scene after scene. `,
    date: `September 18, 2009`
  }, {
    id: 2,
    user: {
      id: 486,
      name: `Alie Collishaw`,
    },
    rating: 8,
    comment: `An intelligent tale from start to finish.`,
    date: `October 09, 2012`
  }, {
    id: 3,
    user: {
      id: 138,
      name: `Josy Bowling`,
    },
    rating: 9,
    comment: `This has to be one of the more interesting psychological thrillers made recently. Just when you think you got ahold of the plot it changes! Playing with "the implicit viewer" this movie has a tendency to constantly surprise and redefine itself in relation to the "expectancy horizon". `,
    date: `May 15, 2020`
  }]
};

const {runTime, starring, director, date, genre} = movie;

it(`Movie card tab details component renders`, () => {
  const tree = renderer
    .create(
        <MovieCardTabDetails
          starring={starring}
          runTime={runTime}
          director={director}
          date={date}
          genre={genre}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});

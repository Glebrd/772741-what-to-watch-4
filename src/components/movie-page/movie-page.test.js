import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page";

const onCardClick = () => {};

const movies = [
  {
    id: 37,
    title: `1+1`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    date: `2010`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 9.5,
    scores: 898,
    director: `Gardener Grigoriev`,
    starring: [`Maible Rosling`, `Tarrah Sillett`, `Christoper Dunford`, `Helga Stammer`],
    description: `After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    id: 35,
    title: `Inception`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    date: `2010`,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 9.1,
    scores: 456,
    director: `Evan Ruit`,
    starring: [`Levi Reisen`, `Waldon Verner`, `Ardith Bogace`],
    description: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
];

const movie = {
  id: 478,
  title: `Pulp Fiction`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Crime`,
  date: `1994`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 7.9,
  scores: 845,
  director: `Kathi Gasticke`,
  starring: [`Adolphus McIndoe`, `Carly Spilsted`, `Rosalind Goodger`, `Teodorico Levey`],
  description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Movie page renders`, () => {
  const tree = renderer
    .create(
        <MoviePage
          onCardClick={onCardClick}
          movies={movies}
          movie={movie}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

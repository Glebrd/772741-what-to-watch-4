import * as React from "react";
import {configure, shallow} from 'enzyme';
import {MoviePage} from "./movie-page";
import * as Adapter from "enzyme-adapter-react-16";
import {MockCallProperty} from "../../const";
import {MovieType} from "../../types";
import history from "../../history";
import {extend} from "../../utils";
import {AppRoute} from "../../const";

configure({adapter: new Adapter()});

const movies = [
  {
    id: 1,
    title: `1+1`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    date: 2010,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 9.5,
    scores: 898,
    director: `Gardener Grigoriev`,
    starring: [`Maible Rosling`, `Tarrah Sillett`, `Christoper Dunford`, `Helga Stammer`],
    description: `After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#D8E3E5`,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    runTime: 135,
    isFavorite: true,
  },
  {
    id: 35,
    title: `Inception`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Comedy`,
    date: 2010,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 9.1,
    scores: 456,
    director: `Evan Ruit`,
    starring: [`Levi Reisen`, `Waldon Verner`, `Ardith Bogace`],
    description: `A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#D8E3E5`,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    runTime: 135,
    isFavorite: true,
  },
];

const movie: MovieType = {
  id: 478,
  title: `Pulp Fiction`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Crime`,
  date: 1994,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 7.9,
  scores: 845,
  director: `Kathi Gasticke`,
  starring: [`Adolphus McIndoe`, `Carly Spilsted`, `Rosalind Goodger`, `Teodorico Levey`],
  description: `The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  backgroundColor: `#D8E3E5`,
  videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
  runTime: 135,
  isFavorite: true,
};

jest.mock(`../movie-card-tabs/movie-card-tabs.tsx`, () => {
  return {
    'default': `MovieCardTabs`
  };
});

it(`Button list click calls onButtonListClick with right data`, () => {

  const onButtonListClick = jest.fn();
  const authorizationStatus = `AUTH`;

  const wrapper = shallow(
      <MoviePage
        history={history}
        currentMovie={movie}
        sameGenreMovies={movies}
        authorizationStatus={authorizationStatus}
        onButtonListClick={onButtonListClick}
      />
  );

  wrapper.find(`.btn--list`).simulate(`click`);
  expect(onButtonListClick.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT]).toMatchObject(movie);
});

it(`Button play click calls history.push with right data`, () => {
  const historyMock = {push: jest.fn()};
  const onButtonListClick = jest.fn();
  const authorizationStatus = `AUTH`;

  const wrapper = shallow(
      <MoviePage
        history = {extend(history, historyMock)}
        currentMovie={movie}
        sameGenreMovies={movies}
        authorizationStatus={authorizationStatus}
        onButtonListClick={onButtonListClick}
      />
  );

  wrapper.find(`.btn--play`).simulate(`click`);
  expect(historyMock.push).toHaveBeenCalledTimes(1);
  expect(historyMock.push.mock.calls[MockCallProperty.FIRST_FUNCTION_CALL][MockCallProperty.FIRST_ARGUMENT])
    .toMatch(AppRoute.MOVIES + movie.id + AppRoute.PLAYER);
});

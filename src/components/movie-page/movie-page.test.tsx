import * as React from "react";
import * as renderer from "react-test-renderer";
import MoviePage from "./movie-page";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {adaptMovie, adaptMovies} from "../../adapters/movies";
import {Router} from "react-router-dom";
import history from "../../history";
import {noOperation} from "../../utils";
import {CommentType, MovieType} from "../../types";
import thunk from 'redux-thunk'

const mockStore = configureStore([])

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

const store = mockStore({
  data: {movies: adaptMovies(movies), promoMovie: adaptMovie(movie)},
  application: {currentGenre: `All genres`},
  user: {user: {avatarURL: `img/1.png`}},
});

const user = {
  id: 1,
    email: 'sdfsd@gmail.com',
    name: 'sdfsd',
    avatarURL: '/wtw/static/avatar/9.jpg'
};

const comment:CommentType =
  {
    "id": 1,
    "user": {
      "id": 5,
      "name": `Kate Mur`
    },
    "rating": 8.9,
    "comment": `Two detectives, a rookie and a veteran, hunt a serial killer who uses`,
    "date": `2019-05-08T14:13:56.569Z`
  };

const comments = [comment];

jest.mock('../movie-card-tabs/movie-card-tabs', () => () => {
  const ComponentToMock = () => <div />;
  return `ComponentToMock`;
});

// const MoviePage = require('../movie-card-tabs/movie-card-tabs').default;

// window['onReviewsTabClick'] = jest.fn();

// jest.mock(`../movie-card-tabs/movie-card-tabs.tsx`, () => () => `MovieCardTabs`)

jest.mock('../movie-card-tabs/movie-card-tabs.tsx', () => {
  return {
    'default': 'ChildComponent'
  }
});;

// jest.mock("../movie-card-tabs/movie-card-tabs", function() => () => {
//   return {
//     onReviewsTabClick: jest.fn().mockImplementationOnce(() => Promise.resolve(``)),
//     }
//   });

// jest.mock('../movie-card-tabs/movie-card-tabs', () => ({
//   onReviewsTabClick: jest.fn().mockImplementationOnce(() => Promise.resolve(``)),
// }));

// const onReviewsTabClick = jest.fn().mockImplementationOnce(() => Promise.resolve(``));
// const api = {};
it(`Movie page renders`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MoviePage
              currentMovie={movie}
              user={user}
              sameGenreMovies={movies}
              onPlayClick={noOperation}
              authorizationStatus={`1`}
              onButtonListClick={null}
              match={{params:{id:1}}}
            />
          </Provider>
        </Router>).toJSON();

  expect(tree).toMatchSnapshot();
});

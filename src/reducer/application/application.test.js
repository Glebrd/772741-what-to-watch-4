import {reducer} from "./application.js";
import {ActionType} from "./application";
import {extend} from "../../utils";

const initialState = {
  currentMovie: {},
  currentGenre: `All genres`,
  numberOfMoviesOnMain: 8,
};

const movieMock = {
  id: 1,
  title: `Fantastic Beasts`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Comedy`,
  date: `2014`,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 1,
  scores: 634,
  director: `Mathilde Fullard`,
  starring: [`Leoine Hanhardt`, `Fowler Rickhuss`, `Klement Penswick`],
  description: `A clueless tapped out parody band struggles through outlandish schemes to raise money to get to the South By Southwest Music Festival.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `1h 19m`,
  comments: [{
    id: 1,
    user: {
      id: 523,
      name: `Candice Martignon`,
    },
    rating: 7,
    comment: `An Overstuffed Sequel Loses Some of Its Magic`,
    date: `December 24, 2018`
  }, {
    id: 2,
    user: {
      id: 53,
      name: `Melisse MacNeely`,
    },
    rating: 3,
    comment: ` More focused on franchise building than telling a good story! `,
    date: `December 25, 2018`
  }, {
    id: 3,
    user: {
      id: 113,
      name: `Lin Pedlow`,
    },
    rating: 4,
    comment: `Watching this gives you the sense that nobody really knew where to go after the first film ended... and it shows. Beautiful film with a great cast, but an ultimately pointless story that sort of flops around like a dead fish not quite aware yet that its dead. This film is disappointing and forgettable.`,
    date: `December 26, 2018`
  }]
};


describe(`Reducer works correctly`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  test(`Reducer sets current genre correctly (by using SET_CURRENT_GENRE)`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Drama`,
    })).toEqual(extend(initialState,
        {currentGenre: `Drama`}));
  });

  test(`Reducer sets current movie correctly (by using SET_CURRENT_MOVIE)`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: movieMock,
    })).toEqual(extend(initialState,
        {currentMovie: movieMock}));
  });

  test(`Reducer sets current number of movies on main page correctly (by using INCREASE_NUMBER_OF_MOVIES_ON_MAIN)`, () => {
    expect(reducer(initialState, {
      type: ActionType.INCREASE_NUMBER_OF_MOVIES_ON_MAIN,
      payload: 8,
    })).toEqual(extend(initialState,
        {numberOfMoviesOnMain: 16}));
  });
});

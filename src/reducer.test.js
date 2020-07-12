import {reducer, ActionType} from "./reducer.js";
import {ScreenType} from "./const";
import {moviesMock, movieMock} from "./adapters/movies";
import {extend} from "./utils";

const initialState = {
  movies: moviesMock,
  currentMovie: movieMock,
  currentGenre: `All genres`,
  currentScreen: ScreenType.MAIN,
  numberOfMoviesOnMain: 8,
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
      payload: moviesMock[1],
    })).toEqual(extend(initialState,
        {currentMovie: moviesMock[1]}));
  });

  test(`Reducer sets current screen correctly (by using SET_CURRENT_SCREEN)`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_CURRENT_SCREEN,
      payload: ScreenType.MOVIE,
    })).toEqual(extend(initialState,
        {currentScreen: ScreenType.MOVIE}));
  });

  test(`Reducer sets current number of movies on main page correctly (by using INCREASE_NUMBER_OF_MOVIES_ON_MAIN)`, () => {
    expect(reducer(initialState, {
      type: ActionType.INCREASE_NUMBER_OF_MOVIES_ON_MAIN,
      payload: 8,
    })).toEqual(extend(initialState,
        {numberOfMoviesOnMain: 16}));
  });
});

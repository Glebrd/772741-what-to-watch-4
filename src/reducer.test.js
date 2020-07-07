import {reducer, ActionType} from "./reducer.js";
import {ScreenType} from "./const";
import {moviesMock, movieMock} from "./mocks/movies";

describe(`Reducer works correctly`, () => {

  test(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: movieMock,
      currentGenre: `All genres`,
      currentScreen: ScreenType.MAIN,
    });
  });

  test(`Reducer sets current genre correctly (by using SET_CURRENT_GENRE)`, () => {
    expect(reducer({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: movieMock,
      currentGenre: `All genres`,
      currentScreen: ScreenType.MAIN,
    }, {
      type: ActionType.SET_CURRENT_GENRE,
      payload: `Drama`,
    })).toEqual({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: movieMock,
      currentGenre: `Drama`,
      currentScreen: ScreenType.MAIN,
    });
  });

  test(`Reducer sets current movie correctly (by using SET_CURRENT_MOVIE)`, () => {
    expect(reducer({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: movieMock,
      currentGenre: `All genres`,
      currentScreen: ScreenType.MAIN,
    }, {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: moviesMock[1],
    })).toEqual({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: moviesMock[1],
      currentGenre: `All genres`,
      currentScreen: ScreenType.MAIN,
    });
  });

  test(`Reducer sets current screen correctly (by using SET_CURRENT_SCREEN)`, () => {
    expect(reducer({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: movieMock,
      currentGenre: `All genres`,
      currentScreen: ScreenType.MAIN,
    }, {
      type: ActionType.SET_CURRENT_SCREEN,
      payload: ScreenType.MOVIE,
    })).toEqual({
      movies: moviesMock,
      movieCard: movieMock,
      currentMovie: movieMock,
      currentGenre: `All genres`,
      currentScreen: ScreenType.MOVIE,
    });
  });
});

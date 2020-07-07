import {moviesMock} from "./mocks/movies.js";
import {movieMock} from "./mocks/movies.js";
import {extend} from "./utils.js";
import {ScreenType} from "./const";

// Изначальное состояние.
const initialState = {
  movies: moviesMock,
  movieCard: movieMock,
  currentMovie: movieMock, // для тестового доступа по /dev-film
  currentGenre: `All genres`,
  currentScreen: ScreenType.MAIN,
};

// Перечисление имеющихся типов действий
const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
  SET_CURRENT_SCREEN: `SET_CURRENT_SCREEN`,
};

// Создаем action
const ActionCreator = {
  setCurrentGenre: (currentGenre) => {
    return {
      type: ActionType.SET_CURRENT_GENRE,
      payload: currentGenre
    };
  },
  setCurrentMovie: (currentMovie) => {
    return {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: currentMovie
    };
  },
  setCurrentScreen: (currentScreen) => {
    return {
      type: ActionType.SET_CURRENT_SCREEN,
      payload: currentScreen
    };
  }
};

// Reducer На вход передаём state и action. Если state не указан,то берем изначальный.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {currentGenre: action.payload});
    case ActionType.SET_CURRENT_MOVIE:
      return extend(state, {currentMovie: action.payload});
    case ActionType.SET_CURRENT_SCREEN:
      return extend(state, {currentScreen: action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};

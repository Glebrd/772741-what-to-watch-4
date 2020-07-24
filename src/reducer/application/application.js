import {extend} from "../../utils";

// Изначальное состояние.
const initialState = {
  currentMovie: {},
  currentGenre: `All genres`,
  numberOfMoviesOnMain: 8,
};

// Перечисление имеющихся типов действий
const ActionType = {
  SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
  SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
  INCREASE_NUMBER_OF_MOVIES_ON_MAIN: `INCREASE_NUMBER_OF_MOVIES_ON_MAIN`,
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
  increaseNumberOfMoviesOnMain: (numberOfMoviesToAdd) => {
    return {
      type: ActionType.INCREASE_NUMBER_OF_MOVIES_ON_MAIN,
      payload: numberOfMoviesToAdd
    };
  },
};

// Reducer На вход передаём state и action. Если state не указан,то берем изначальный.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return extend(state, {currentGenre: action.payload});
    case ActionType.SET_CURRENT_MOVIE:
      return extend(state, {currentMovie: action.payload});
    case ActionType.INCREASE_NUMBER_OF_MOVIES_ON_MAIN:
      return extend(state, {numberOfMoviesOnMain: state.numberOfMoviesOnMain + action.payload});
  }
  return state;
};

export {reducer, ActionType, ActionCreator};

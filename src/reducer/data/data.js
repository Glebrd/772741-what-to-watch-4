import {extend} from "../../utils";
import {adaptMovies} from "../../adapters/movies";
import {adaptMovie} from "../../adapters/movies";

// Изначальное состояние.
const initialState = {
  movies: [],
  currentMovie: {},
};

// Перечисление имеющихся типов действий
const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
};

// Создаем action
const ActionCreator = {
  loadMovies: (movies) => {
    return {
      type: ActionType.LOAD_MOVIES,
      payload: movies,
    };
  },
  loadPromoMovie: (movie) => {
    return {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movie,
    };
  },
};

// Создаем operation
const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
        // operation loadQuestions => dispath(reducer) => ActionCreator loadQuestions => ActionType  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(response.data));
        // operation loadQuestions => dispath(reducer) => ActionCreator loadQuestions => ActionType  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
      });
  },
};

// Reducer На вход передаём state и action. Если state не указан,то берем изначальный.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return extend(state, {
        movies: adaptMovies(action.payload),
      });
    case ActionType.LOAD_PROMO_MOVIE:
      return extend(state, {
        currentMovie: adaptMovie(action.payload),
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

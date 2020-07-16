import {extend} from "../../utils";
import {adaptMovies} from "../../adapters/movies";
import {adaptMovie} from "../../adapters/movies";

// Изначальное состояние.
const initialState = {
  movies: [],
  promoMovie: {},
};

// Перечисление имеющихся типов действий
const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
  SET_COMMENTS: `SET_COMMENTS`,
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
  setComments: (comments) => {
    return {
      type: ActionType.SET_COMMENTS,
      payload: comments,
    };
  }
};

// Создаем operation
const Operation = {
  loadMovies: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadMovies(response.data));
      });
  },
  loadPromoMovie: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromoMovie(response.data));
      });
  },

  loadComments: (movie) => (dispatch, getState, api) => {
    return api.get(`/comments/${movie.id}`)
      .then(({data}) => {
        dispatch(ActionCreator.setComments(data));
      });
  },
  uploadReview: (movie, comment, rating) => (dispatch, _, api) => {
    return api.post(`/comments/${movie.id}`, {rating, comment})
      .then((response) => {
        if (response !== undefined) {
          dispatch(ActionCreator.setComments(response.data));
        }
        return response;
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
        promoMovie: adaptMovie(action.payload),
      });
    case ActionType.SET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }
  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

// import {extend} from "./utils.js";
// import {ScreenType} from "./const";
// import {adaptMovies} from "./adapters/movies";
// import {adaptMovie} from "./adapters/movies";
//
//
// // Изначальное состояние.
// const initialState = {
//   movies: [],
//   currentMovie: {},
//   currentGenre: `All genres`,
//   currentScreen: ScreenType.MAIN,
//   numberOfMoviesOnMain: 8,
// };
//
// // Перечисление имеющихся типов действий
// const ActionType = {
//   SET_CURRENT_GENRE: `SET_CURRENT_GENRE`,
//   SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
//   SET_CURRENT_SCREEN: `SET_CURRENT_SCREEN`,
//   INCREASE_NUMBER_OF_MOVIES_ON_MAIN: `INCREASE_NUMBER_OF_MOVIES_ON_MAIN`,
//   LOAD_MOVIES: `LOAD_MOVIES`,
//   LOAD_PROMO_MOVIE: `LOAD_PROMO_MOVIE`,
// };
//
// // Создаем action
// const ActionCreator = {
//   setCurrentGenre: (currentGenre) => {
//     return {
//       type: ActionType.SET_CURRENT_GENRE,
//       payload: currentGenre
//     };
//   },
//   setCurrentMovie: (currentMovie) => {
//     return {
//       type: ActionType.SET_CURRENT_MOVIE,
//       payload: currentMovie
//     };
//   },
//   setCurrentScreen: (currentScreen) => {
//     return {
//       type: ActionType.SET_CURRENT_SCREEN,
//       payload: currentScreen
//     };
//   },
//   increaseNumberOfMoviesOnMain: (numberOfMoviesToAdd) => {
//     return {
//       type: ActionType.INCREASE_NUMBER_OF_MOVIES_ON_MAIN,
//       payload: numberOfMoviesToAdd
//     };
//   },
//   loadMovies: (movies) => {
//     return {
//       type: ActionType.LOAD_MOVIES,
//       payload: movies,
//     };
//   },
//   loadPromoMovie: (movie) => {
//     return {
//       type: ActionType.LOAD_PROMO_MOVIE,
//       payload: movie,
//     };
//   },
// };
//
// // Создаем operation
// const Operation = {
//   loadMovies: () => (dispatch, getState, api) => {
//     return api.get(`/films`)
//       .then((response) => {
//         dispatch(ActionCreator.loadMovies(response.data));
//         // operation loadQuestions => dispath(reducer) => ActionCreator loadQuestions => ActionType  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
//       });
//   },
//   loadPromoMovie: () => (dispatch, getState, api) => {
//     return api.get(`/films/promo`)
//       .then((response) => {
//         dispatch(ActionCreator.loadPromoMovie(response.data));
//         // operation loadQuestions => dispath(reducer) => ActionCreator loadQuestions => ActionType  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
//       });
//   },
// };
//
// // Reducer На вход передаём state и action. Если state не указан,то берем изначальный.
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ActionType.SET_CURRENT_GENRE:
//       return extend(state, {currentGenre: action.payload});
//     case ActionType.SET_CURRENT_MOVIE:
//       return extend(state, {currentMovie: action.payload});
//     case ActionType.SET_CURRENT_SCREEN:
//       return extend(state, {currentScreen: action.payload});
//     case ActionType.INCREASE_NUMBER_OF_MOVIES_ON_MAIN:
//       return extend(state, {numberOfMoviesOnMain: state.numberOfMoviesOnMain + action.payload});
//     case ActionType.LOAD_MOVIES:
//       return extend(state, {
//         movies: adaptMovies(action.payload),
//       });
//     case ActionType.LOAD_PROMO_MOVIE:
//       return extend(state, {
//         currentMovie: adaptMovie(action.payload),
//       });
//   }
//   return state;
// };
//
// export {reducer, ActionType, ActionCreator, Operation};

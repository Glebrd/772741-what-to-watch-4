import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data";
import {extend, replaceMovie, replacePromo} from "../../utils";
import {adaptMovie, adaptMovies} from "../../adapters/movies";

const initialState = {
  movies: [],
  promoMovie: {},
};

const api = createAPI(() => {});

const moviesMock = [
  {
    id: 3,
    title: `Macbeth`,
    picture: `img/macbeth.jpg`,
    genre: `Romance`,
    date: `2016`,
    poster: `img/macbeth.jpg`,
    background: `img/macbeth.jpg`,
    rating: 3,
    scores: 1234,
    director: `Pacorro Scimonelli`,
    starring: [`Reamonn Novotna`, `Owen Tellenbrook`, `Gerick Calterone`],
    description: `Quentin Tarantino's Once Upon a Time... in Hollywood visits 1969 Los Angeles, where everything is changing, as TV star Rick Dalton (Leonardo DiCaprio) and his longtime stunt double Cliff Booth (Brad Pitt) make their way around an industry they hardly recognize anymore. The ninth film from the writer-director features a large ensemble cast and multiple storylines in a tribute to the final moments of Hollywood's golden age.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: `1h 39m`,
    comments: [{
      id: 1,
      user: {
        id: 943,
        name: `Leda Fairchild`,
      },
      rating: 8,
      comment: `Fantastic adaptation of Shakespeare's iconic tragedy .`,
      date: `December 30, 2018`
    }, {
      id: 2,
      user: {
        id: 3,
        name: `Ransom Exposito`,
      },
      rating: 9,
      comment: `Gripping, Intense, Beautifully shot, with Unforgettable Performances.`,
      date: `December 10, 2019`
    }, {
      id: 3,
      user: {
        id: 603,
        name: `Nikola Slot`,
      },
      rating: 9,
      comment: `I wanted so much to love this movie! A stellar cast, wonderful source material, what could go wrong. What went right was the visuals; the film looks great. Locations, costumes, cinematography, all are just splendid. But all that is spoiled because most of the time you can't understand what the actors are saying!`,
      date: `December 29, 2019`
    }]
  },
  {
    id: 4,
    title: `Aviator`,
    picture: `img/aviator.jpg`,
    genre: `Comedy`,
    date: `2015`,
    poster: `img/aviator.jpg`,
    background: `img/aviator.jpg`,
    rating: 4,
    scores: 1235,
    director: `Lorene Kelley`,
    starring: [`Gawen Trembley`, `Roseann Sexten`, `Glyn Latey`],
    description: `In the twenty-third century, the universe is threatened by evil. The only hope for mankind is the Fifth Element, who comes to Earth every five thousand years to protect the humans with four stones of the four elements: fire, water, Earth and air. A Mondoshawan spacecraft is bringing The Fifth Element back to Earth but it is destroyed by the evil Mangalores. However, a team of scientists use the DNA of the remains of the Fifth Element to rebuild the perfect being called Leeloo. She escapes from the laboratory and stumbles upon the taxi driver and former elite commando Major Korben Dallas that helps her to escape from the police. Leeloo tells him that she must meet Father Vito Cornelius to accomplish her mission. Meanwhile, the Evil uses the greedy and cruel Jean-Baptiste Emanuel Zorg and a team of mercenary Mangalores to retrieve the stones and avoid the protection of Leeloo. But the skilled Korben Dallas has fallen in love with Leeloo and decides to help her to retrieve the stones.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    runTime: `1h 45m`,
    comments: [{
      id: 1,
      user: {
        id: 43,
        name: `Wyatt Brunning`,
      },
      rating: 2,
      comment: ` "The Aviator" is a portrait of a man of genius and unmatched innovation, and also a man debilitated by severe obsessive compulsive disorder and extreme depression.`,
      date: `December 28, 2019`
    }, {
      id: 2,
      user: {
        id: 430,
        name: `Amalia Lavens`,
      },
      rating: 6,
      comment: ` A Striking and Ambitious Saga`,
      date: `December 27, 2019`
    }, {
      id: 3,
      user: {
        id: 40,
        name: `Kareem Klima`,
      },
      rating: 8,
      comment: ` Insightful and well done`,
      date: `December 26, 2019`
    }]
  },
];

const movieMock = {
  id: 2,
  title: `Bohemian Rhapsody`,
  picture: `img/bohemian-rhapsody.jpg`,
  genre: `Sci-Fi`,
  date: `2014`,
  poster: `img/bohemian-rhapsody.jpg`,
  background: `img/bohemian-rhapsody.jpg`,
  rating: 2,
  scores: 354,
  director: `Rubin Allardyce`,
  starring: [`Honor Fowlston`, `Iris Bumby`, `Trent Forber`],
  description: `When renowned crime novelist Harlan Thrombey (Christopher Plummer) is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc (Daniel Craig) is mysteriously enlisted to investigate. From Harlan's dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan's untimely death.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: `1h 29m`,
  comments: [{
    id: 1,
    user: {
      id: 987,
      name: `Dierdre Soloway`,
    },
    rating: 9,
    comment: ` One of the best movies of the year! The performances are all excellent.`,
    date: `December 27, 2018`
  }, {
    id: 2,
    user: {
      id: 97,
      name: `Liva Genn`,
    },
    rating: 10,
    comment: `I'm a 75 yr old Gramma that saw this movie with her son and grandson. We all Loved it! I "heard" Queen music as I worked and raised my 4 children, but never really knew the band it came from. My children Lived with Queen music, and totally identified with them, especially in their band performances. My grandson heard Queen because his father played it all the time. We saw this movie as a family and the movie was about family, friends, and loyalty.`,
    date: `December 28, 2018`
  }, {
    id: 3,
    user: {
      id: 701,
      name: `Frannie Madison`,
    },
    rating: 4,
    comment: `Solid entertainment in the second half of the movie, but not much more. Overall bland and flat, Mercury and all the Queen deserve much better.`,
    date: `December 29, 2018`
  }]
};

describe(`Reducer works correctly`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual(initialState);
  });

  it(`Reducer should update promo movie by loading promo movie`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_PROMO_MOVIE,
      payload: movieMock,
    })).toEqual(extend(initialState,
        {promoMovie: adaptMovie(movieMock)}));
  });
  it(`Reducer should update promo movies by loading movies`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_MOVIES,
      payload: moviesMock,
    })).toEqual(extend(initialState,
        {movies: adaptMovies(moviesMock)}));
  });
  it(`Reducer should update movies correctly`, () => {
    expect(reducer(initialState, {
      type: ActionType.UPDATE_MOVIE,
      payload: movieMock,
    })).toEqual(extend(initialState,
        {
          movies: replaceMovie(adaptMovie(movieMock), initialState.movies),
          promoMovie: replacePromo(adaptMovie(movieMock), initialState.promoMovie)
        }));
  });
});

describe(`Operations work correctly`, () => {
  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoMovieLoader = Operation.loadPromoMovie();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoMovieLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_MOVIE,
          payload: [{fake: true}],
        });
      });
  });
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const moviesLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}],
        });
      });
  });
});

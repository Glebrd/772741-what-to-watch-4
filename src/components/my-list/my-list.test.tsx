import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";
import {MyList} from "./my-list";

const mockStore = configureStore([]);

const movies = [
  {
    id: 42,
    title: `Back to the Future`,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Sci-Fi`,
    date: 1985,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 8,
    scores: 713,
    director: `Appolonia Gosart`,
    starring: [`Worthy Gerbi`, `Karolina Conibeer`, `Jemimah Calwell`, `Hyacinthie Topp`],
    description: `Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#D8E3E5`,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    runTime: 135,
    isFavorite: true,
  },
  {
    id: 422,
    title: `Psycho `,
    picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    genre: `Horror`,
    date: 1960,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    rating: 8,
    scores: 223,
    director: `Wesley MacDonald`,
    starring: [`Christean Ormonde`, `Ulric Gilbart`, `Rowland Vyvyan`, `Carney Elgood`],
    description: `A Phoenix secretary embezzles forty thousand dollars from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `#D8E3E5`,
    videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    runTime: 135,
    isFavorite: true,
  },
];

const store = mockStore({
});

jest.mock(`../user-block/user-block.tsx`, () => {
  return {
    'default': `UserBlock`
  };
});

it(`MyList renders correctly`, () => {
  const tree = renderer

    .create(
        <Router history={history}>
          <Provider store={store}>
            <MyList
              favoriteMovies={movies}
            />
          </Provider>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);

const movie = {
  id: 19,
  title: `Mindhunter`,
  picture: `img/mindhunter.jpg `,
  genre: `Crime`,
  date: 2008,
  poster: `img/mindhunter.jpg `,
  background: `img/mindhunter.jpg `,
  rating: 7.8,
  scores: 318,
  director: `Fabien Moorton`,
  starring: [`Peggie Deverick`, `Homere Bruna`, `Lee Chandlar`],
  description: `Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 123,
};

const store = mockStore({
  application: {currentGenre: `All genres`},
  user: {user: {avatarURL: `img/1.png`}},
});

it(`Add review renders`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <AddReview
              currentMovie = {movie}
            />
          </Provider>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

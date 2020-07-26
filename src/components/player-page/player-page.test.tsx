import * as React from "react";
import * as renderer from "react-test-renderer";
import {PlayerPage} from "./player-page";
import {Router} from "react-router-dom";
import history from "../../history";
import noOperation from "../../const";

const currentMovie = {
  id: 7,
  title: `Revenant `,
  picture: `img/revenant.jpg`,
  genre: `Comedy`,
  date: 2015,
  poster: `img/revenant.jpg`,
  background: `img/revenant.jpg`,
  rating: 8.1,
  scores: 556,
  director: `Nisse Prahm`,
  starring: [`Eirena Corain`, `Kamila Skelhorn`, `Manuel Elcott`],
  description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 120,
};

jest.mock(`../player-controls/player-controls`, () => `PlayerControls`);

it(`Player page renders`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PlayerPage
            onExit={noOperation}
            currentMovie={currentMovie}
            history={noOperation}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

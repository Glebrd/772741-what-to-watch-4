import React from "react";
import renderer from "react-test-renderer";
import {PlayerPage} from "./player-page";

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
  comments: [{
    id: 1,
    user: {
      id: 177,
      name: `Vitia Cruces`,
    },
    rating: 9,
    comment: `Simply put, it is an excellent story of family, revenge, survival, and nature.`,
    date: `March 14, 2019`
  }, {
    id: 2,
    user: {
      id: 174,
      name: `Ray Poyser`,
    },
    rating: 8,
    comment: `One of the Best Movies I'll never watch twice`,
    date: `May 09, 2017`
  }, {
    id: 3,
    user: {
      id: 74,
      name: `Toddy Sabatini`,
    },
    rating: 8,
    comment: `great effects and an awesome start but degenerates into a meaningless mess of Hollywood clichés`,
    date: `October 18, 2019`
  }]
};

jest.mock(`../player-controls/player-controls`, () => `PlayerControls`);
const onExit = () => {};

it(`Player page renders`, () => {
  const tree = renderer
    .create(
        <PlayerPage
          onExit = {onExit}
          currentMovie = {currentMovie}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

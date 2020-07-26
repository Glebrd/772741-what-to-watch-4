import * as React from "react";
import * as renderer from "react-test-renderer";
import {MovieCardTabs} from "./movie-card-tabs.jsx";
import {noOperation} from "../../utils";

const movie = {
  id: 201,
  title: `Django Unchained`,
  picture: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `Drama`,
  date: 2012,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  background: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  rating: 8.6,
  scores: 952,
  director: `Floyd Emblow`,
  starring: [`Sally Cullin`, `Harman Kleinstein`, `Chilton Petican`, `Chico Magwood`],
  description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.`,
  videoPreview: `https: //upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  runTime: 123,
};

it(`Movie card tabs component renders`, () => {
  const tree = renderer
    .create(
        <MovieCardTabs
          movie={movie}
          onReviewsTabClick={noOperation}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

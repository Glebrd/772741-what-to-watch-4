import * as React from "react";
import * as renderer from "react-test-renderer";
import MovieCardTabReviews from "./movie-card-tab-reviews";

const comments = [
  {
    "id": 1,
    "user": {
      "id": 5,
      "name": `Kate Mur`
    },
    "rating": 8.9,
    "comment": `Two detectives, a rookie and a veteran, hunt a serial killer who uses`,
    "date": `2019-05-08T14:13:56.569Z`
  }
];

it(`Movie card tab reviews renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardTabReviews
          comments={comments}
        />).toJSON();

  expect(tree).toMatchSnapshot();
});

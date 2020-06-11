import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Movie = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  DATE: `2014`
};

ReactDOM.render(
    <App movieName={Movie.NAME} movieGenre={Movie.GENRE} movieDate={Movie.DATE}/>,
    document.querySelector(`#root`)
);

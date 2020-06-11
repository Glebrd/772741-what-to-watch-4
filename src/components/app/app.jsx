import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, movieGenre, movieDate} = props;

  return (
    <Main movieName={movieName} movieGenre={movieGenre} movieDate={movieDate}/>
  );
};

export default App;

import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Comments from "./components/Comments/Comments";
import { useState } from "react";

function App() {
  return (
    <>
      {/* setState variable for the .json data file will need to be defined here */}
      <Header />
      <Video />
      <Comments />

      {/* We'll need to broadcast the .json array values as a prop to the children component(s) use Nav's Nov.22 LAB to see the functionality */}
    </>
  );
}

export default App;

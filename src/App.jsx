import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* setState variable for the .json data file will need to be defined here */}
      <Header />

      {/* We'll need to broadcast the .json array values as a prop to the children component(s) use Nav's Nov.22 LAB to see the functionality */}
    </>
  );
}

export default App;

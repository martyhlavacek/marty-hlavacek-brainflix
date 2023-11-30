import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Upload from "./assets/pages/Upload/Upload";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/video/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Upload from "./pages/Upload/Upload.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos/:videoId" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

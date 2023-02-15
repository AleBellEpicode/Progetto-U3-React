import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* import NavBar from "./Components/NavBar"; */
import NavBar from "./Components/NavBar";
import UnderNavBar from "./Components/UnderNavBar";
import FirstRow from "./Components/FirstRow";
import SecondRow from "./Components/SecondRow";
import ThirdRow from "./Components/ThirdRow";
import Row1Title from "./Components/Row1Title";
import Row2Title from "./Components/Row2Title";
import Row3Title from "./Components/Row3Title";
import TvShows from "./Components/TvShows";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<UnderNavBar />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route
            path="/matrix-saga"
            element={
              <>
                <Row1Title />
                <FirstRow />
              </>
            }
          />
          <Route element={<FirstRow />} />
          <Route
            path="/lord-of-the-rings"
            element={
              <>
                <Row2Title />
                <SecondRow />
              </>
            }
          />
          <Route
            path="/star-wars-saga"
            element={
              <>
                <Row3Title />
                <ThirdRow />
              </>
            }
          />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

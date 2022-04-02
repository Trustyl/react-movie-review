import logo from './logo.svg';
import './App.css';
import MovieReview from "./Components/MovieReview.js";
import Stories from "./Components/Stories.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          < Route exact path="/" element={<MovieReview />}>
          </Route>
          <Route path="Stories" element={<Stories />}>

          </Route>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
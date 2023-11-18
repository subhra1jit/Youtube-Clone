import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  ChannelDetails,
  NavBar,
  SearchFeed,
  VideoDetails,
  VideoFeed,
} from "./components";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<VideoFeed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:searchValue" element={<SearchFeed />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import NationDetails from "./components/NationDetails/NationDetails";

function App() {
  return (
    <div>
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nation/:nationName" element={<NationDetails />} />

          <Route index path="/" element={<Home />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

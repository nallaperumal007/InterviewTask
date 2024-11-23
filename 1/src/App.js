import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Page 1</Link> | <Link to="/page2">Page 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
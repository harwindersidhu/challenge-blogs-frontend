import Home from "./components/Home";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.scss";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Home page={page} setPage={(val) => setPage(() => val)} />
              }
            />
            <Route path="/blog/:slug" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

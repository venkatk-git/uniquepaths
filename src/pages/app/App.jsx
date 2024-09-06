import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CreatePage from "../create/CreatePage";
import PathsPage from "../paths/PathsPage";

import "../../utils/helpers";

function App() {
  const [m, setM] = React.useState("");
  const [n, setN] = React.useState("");
  const [grid, setGrid] = React.useState([]);

  const dimension = { m: Number(m), n: Number(n) };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <CreatePage
                m={m}
                n={n}
                setM={setM}
                setN={setN}
                grid={grid}
                setGrid={setGrid}
                dimension={dimension}
              />
            }
          />
          <Route path="/paths" element={<PathsPage grid={grid} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

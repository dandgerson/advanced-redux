import React from "react";
import { Link, NavLink, Route, Routes, useRoutes } from "react-router-dom";
import "./App.scss";
import SuperTasker from "./components/SuperTasker/SuperTasker";

const routes = [
  {
    index: true,
    element: <SuperTasker />,
  },
  {
    path: "supertasker",
    element: <SuperTasker />,
    title: "Supertasker",
  },
  {
    path: "counter",
    element: <div>Counter</div>,
    title: "Accident Counter RTK",
  },
  {
    path: "jetsetter",
    element: <div>Jet setter rtk</div>,
    title: "Jet setter",
  },
];

function App() {
  return (
    <div className="App">
      <h2>Advanced Redux with Steve Kinney</h2>
      <ul
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {routes
          .filter((route) => !route.index)
          .map(
            (route) =>
              route.path && (
                <NavLink key={route.path} to={route.path}>
                  {route.title}
                </NavLink>
              )
          )}
      </ul>
      <div className="routes-container">{useRoutes(routes)}</div>
    </div>
  );
}

export default App;

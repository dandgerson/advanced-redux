import { NavLink, useRoutes } from "react-router-dom";
import "./App.scss";
import { Counter } from "./pages/Counter/Counter";
import SuperTasker from "./pages/SuperTasker/SuperTasker";

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
    element: <Counter />,
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
                <NavLink key={route.path} to={route.path} className="link">
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

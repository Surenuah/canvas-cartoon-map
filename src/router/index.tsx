import { createBrowserRouter, Link } from "react-router-dom";
import { App } from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>Главная</h1>
            <Link to="wiz">Перейти на WIZ</Link>
            <Link to="ed">Перейти на ED</Link>
            <Link to="profile">Перейти на Профиль</Link>
          </div>
        ),
      },
      {
        path: "wiz",
        element: (
          <div>
            <h1>WIZ</h1>
            <Link to="/">Вернуться на Главную</Link>
          </div>
        ),
      },
      {
        path: "ed",
        element: (
          <div>
            <h1>ED</h1>
            <Link to="/">Вернуться на Главную</Link>
          </div>
        ),
      },
      {
        path: "profile",
        element: (
          <div>
            <h1>Профиль</h1>
            <Link to="/">Вернуться на Главную</Link>
          </div>
        ),
      },
    ],
  },
]);

export default router;
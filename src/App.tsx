import "./App.css";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <>
      <h1>Мапа</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

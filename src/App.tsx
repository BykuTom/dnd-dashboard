import { useState } from "react";
import { Navigation } from "./assets/components/Navigation";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

function App() {
  /* const [playerCreator, setPlayerCreator] = useState(false); */
  const [loggedIn, setLoggedIn] = useState(true);

  const classNames = (...classes: Array<string>) => {
    return classes.filter(Boolean).join(" ");
  };
  const handleLogin = (value: boolean) => {
    setLoggedIn(value);
  };
  /*   const handleTogglePlayerCreator = (value: boolean) => {
    setPlayerCreator(value);
  }; */

  return (
    <BrowserRouter>
      <Navigation
        classNames={classNames}
        loggedIn={loggedIn}
        handleLogin={handleLogin}
      />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

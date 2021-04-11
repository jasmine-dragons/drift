import { useState } from "react";

import "./App.css";
import GamePage from "./components/gamePage.component";
import LandingPage from "./components/landingPage.component";
import FindFriends from "./components/findFriends.component";
import EndingPage from "./components/endingPage.component";

import Login from "./components/login.component";

const App = () => {
  const [page, pageUpdate] = useState(0);
  const nextPage = () => {
    pageUpdate(page + 1);
  };
  const pages = [
    <LandingPage updatePage={nextPage} />,
    <Login updatePage={nextPage} />,
    <FindFriends updatePage={nextPage} />,
    <GamePage updatePage={nextPage} />,
    <EndingPage updatePage={nextPage} />
  ];
  return (
    //to add a new page change the indexes appropriatly and take the updatePage prop.
    //in the new page, add a this on the onSubmit button
    //onClick={props.updatePage}
    <>
      {page !== 0 ? (
        <div onClick={() => pageUpdate(page - 1)}>

          
          <img className="back-arrow" src="buttons/back.png" alt="arrow" />

        </div>
      ) : (
        ""
      )}
      {pages[page]}
    </>
  );
};

export default App;

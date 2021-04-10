import { useState } from "react";

import "./App.css";
import Map from "./components/map.component";
import LandingPage from "./components/landingPage.component";
import Login from "./components/login.component";

const App = () => {
  const [page, pageUpdate] = useState(0);
  const nextPage = () => {
    pageUpdate(page + 1);
  };
  return (
    //to add a new page change the indexes appropriatly and take the updatePage prop.
    //in the new page, add a this on the onSubmit button
    //onClick={props.updatePage}
    <>
      {page !== 0 ? (
        <div onClick={() => pageUpdate(page - 1)}>
          <img className="back-arrow" src="/arrow.svg" alt="arrow" />
        </div>
      ) : (
        ""
      )}
      {page === 0 ? <LandingPage updatePage={nextPage} /> : ""}
      {page === 1 ? <Login /> : ""}
      {page === 2 ? <Map /> : ""}
    </>
  );
};

export default App;

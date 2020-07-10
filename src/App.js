import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "b6305d9d";
  const APP_KEY = "764844850caac0acc0761f3b81ca33d8";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("effect has been run");
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <h1
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </h1>
    </div>
  );
};

export default App;

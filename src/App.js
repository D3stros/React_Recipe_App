import React from "react";
import "./App.css";

const App = () => {
  const APP_ID = "a6c8cfff";
  const APP_KEY = "9e345bee2df690d6b49996e6fac9609c";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;

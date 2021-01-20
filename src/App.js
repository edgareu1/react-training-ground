import React from "react";

function App(props) {
  return (
    <div>
      <h1>Recipe App</h1>
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes}
    </div>
  );
}

export default App;

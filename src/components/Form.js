import React from "react";

function Form(props) {
  return (
    <form className="search-form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        className="search-bar"
        onChange={props.handleChange}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default Form;

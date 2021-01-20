import React from "react";

function Recipe(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        Calories: {props.calories}
      </p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default Recipe;

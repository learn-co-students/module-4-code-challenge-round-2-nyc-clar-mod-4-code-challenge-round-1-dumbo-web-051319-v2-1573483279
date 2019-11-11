import React from "react";

const Book = props => {
  return (
    <div onClick={() => props.updateBooks(props.id)}>
      <h2>{props.title}</h2>
      <img src={`${props.image}`} /> 
    </div>
  );
};

export default Book;

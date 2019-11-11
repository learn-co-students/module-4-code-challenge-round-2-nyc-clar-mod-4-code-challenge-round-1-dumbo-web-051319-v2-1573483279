import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const renderBooks = () =>{
    return props.bookshelf.map( book => <Book {...book} key={book.id} />)
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;

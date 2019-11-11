import React from "react";
import Book from "../components/Book";

const Bookshelf = props => {

  const renderBooks = () => { 
    return props.bookShelf.map(book => { 
      return <Book 
      key={book.id}
     id={book.id}
     image={book.img}
     title={book.title}
     updateBooks={props.updateBooks}
      /> 
    })
  }

  return (
    <div>
      <h1>Book Shelf</h1>
      <ul>{renderBooks()}</ul>
    </div>
  );
};

export default Bookshelf;

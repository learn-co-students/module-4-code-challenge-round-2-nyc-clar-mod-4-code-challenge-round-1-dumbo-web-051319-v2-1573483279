import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";
import { timingSafeEqual } from "crypto";

class BookList extends Component {


  renderBooks(){ 
    return this.props.bookList.map(book => {
     return <Book 
     key={book.id}
     id={book.id}
     image={book.img}
     title={book.title}
     updateBooks={this.props.updateBooks}
     /> 
  })
  }


  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook} />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;

// author: "F. Scott Fitzgerald"
// id: 1
// img: "https://mppl.org/wp-content/uploads/0-214x300.jpg"
// title: "The Great Gatsby"
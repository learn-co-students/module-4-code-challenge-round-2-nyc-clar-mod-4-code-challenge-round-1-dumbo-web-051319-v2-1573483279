import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {

  renderBooks=()=>{
    return this.props.books.map( book => <Book {...book} key={book.id} add={this.props.add}/>)
  }

  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form 
        add={this.props.formAdd}
        handleChange={this.props.handleChange}
        />
        <ul>{this.renderBooks()}</ul>
      </div>
    );
  }
}

export default BookList;

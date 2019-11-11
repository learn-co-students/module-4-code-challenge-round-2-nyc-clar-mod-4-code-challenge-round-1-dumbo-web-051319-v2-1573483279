import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

const API = "http://localhost:3005/books/"

class App extends Component {

  state={
    books:[],
    bookshelf: [],
  }

  getBooks=()=>{
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      books: data
    }))
  }

  componentDidMount(){
    this.getBooks()
  }

  addToBookShelf=(book)=>{
    console.log('i was clicked')
    let copyBookshelf = [...this.state.bookshelf]
    let copyBooks = [...this.state.books]
    let findBookshelf = copyBookshelf.find(b => b.id === book.id)

    if(!findBookshelf){
      copyBookshelf.push(book)
      let newBooks = copyBooks.filter( b => b.id !== book.id)
      this.setState({
      books: newBooks,
      bookshelf: copyBookshelf
      })
    }
  }

  addToBookList=(event, book)=>{
    event.preventDefault()
    console.log(event.target)
    console.log(book)
    let copyBooks = [...this.state.books]
    copyBooks.push(book)
    fetch(API,{
      method: 'POST',
      headers: {
        "Content-Type" : 'application/json',
        "Accept" : 'application/json'
      },
      body: JSON.stringify(book)
    },
      this.setState({
      books: copyBooks
    }))
  }


  render() {
    console.log(this.state.title, this.state.author, this.state.img)
    return (
      <div className="book-container">
        <BookList 
        books={this.state.books}
        add={this.addToBookShelf}
        formAdd={this.addToBookList}
        handleChange={this.handleChange}
        />
        <Bookshelf 
        bookshelf={this.state.bookshelf}
        />
      </div>
    );
  }
}

export default App;

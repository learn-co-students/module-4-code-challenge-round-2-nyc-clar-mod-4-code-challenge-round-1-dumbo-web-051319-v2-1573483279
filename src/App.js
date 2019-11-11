import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {

  state = { 
    bookList: [], 
    bookShelf: [], 
    newBookId: 101
  }
  
  componentDidMount(){ 
    fetch(`http://localhost:3005/books`)
      .then(resp => resp.json())
      .then(resp => this.setState({ 
        bookList: resp
      }))
  }

  updateBookList = (id) => { 
    let foundBook = this.state.bookList.find(book => book.id === id)
    let filteredBooks = this.state.bookList.filter(book => book.id !== id)
    this.setState({ 
      bookList: filteredBooks, 
      bookShelf: [...this.state.bookShelf, foundBook]
    })
  }

  updateBookShelf = (id) => { 
    let foundBook = this.state.bookShelf.find(book => book.id === id)
    let filteredBooks = this.state.bookShelf.filter(book => book.id !== id)
    this.setState({ 
      bookList: [...this.state.bookList, foundBook], 
      bookShelf: filteredBooks
    })
  }

  addBook = (title, author, image) => { 

    fetch(`http://localhost:3005/books`, { 
      method: 'POST', 
      headers: { 
         Accept: 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({ 
        author: author, 
        title: title, 
        img: image, 
        id: this.state.id
      })
    }).then(resp => resp.json()).then(resp => 
      this.setState({ 
      bookList: [...this.state.bookList, resp]
    })
    )
  }
    
  render() {
    return (
      <div className="book-container">
        <BookList bookList={this.state.bookList} updateBooks={this.updateBookList} addBook={this.addBook}/>
        <Bookshelf bookShelf={this.state.bookShelf} updateBooks={this.updateBookShelf}/>
      </div>
    );
  }
}

export default App;

// author: "F. Scott Fitzgerald"
// id: 1
// img: "https://mppl.org/wp-content/uploads/0-214x300.jpg"
// title: "The Great Gatsby"
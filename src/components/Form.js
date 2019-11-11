import React from "react";

class Form extends React.Component {

  state = { 
    title: '', 
    author: '', 
    image: ''
  }

  handleTitleChange = (event) => { 
    this.setState({ 
      title: event.target.value
    })
  }

  handleAuthorChange = (event) => { 
    this.setState({ 
      author: event.target.value
    })
  }

  handleImageChange = (event) => { 
    this.setState({ 
      image: event.target.value
    })
  }

  handleSubmit = (event) => { 
    event.preventDefault()
    this.props.addBook(this.state.title, this.state.author, this.state.image)
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='title' onChange={this.handleTitleChange} value={this.state.title}></input>
          <input type='text' placeholder='author' onChange={this.handleAuthorChange} value={this.state.author}></input>
          <input type='text' placeholder='img' onChange={this.handleImageChange} value={this.state.image}></input>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Form;

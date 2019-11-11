import React from "react";

class Form extends React.Component {

  state={
    title: "",
    author: "",
    img: ""
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }


  render() {
    console.log(this.state)
    return <form onSubmit={(event) => this.props.add(event, this.state)}>
    <label>
        Book Title:
      <input type="text" name="title" onChange={(event) => this.handleChange(event)} />
    </label>
    <label>
      Author:
      <input type="text" name="author" onChange={(event) => this.handleChange(event)} />
    </label>
    <label>
      Image:
      <input type="text" name="img" onChange={(event) => this.handleChange(event)} />
    </label>
   <input type="submit" value="Submit" />
    </form>
  }
}

export default Form;

import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };  //[event.target.name]
  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  storItem = (event) => {
    event.preventDefault();
    const { input } = this.state;

    this.setState({
      items: [...this.state.items, input],
      input:""
    });//...this.state.items + input  adding items
  };
  deleteItem=(index)=>{
     const allItemes = this.state.items;
     allItemes.splice(index,1)
     this.setState({
       items: allItemes  //splice items as index state.items onsubmi
     })
  }
  render() {
    const { input, items } = this.state;
    return (
      <div className="todo-container">
        <form className="input-section" onSubmit={this.storItem}>
          <h1>TodoAPP</h1>
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Item..."
          />
        </form>
        <ul>
          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

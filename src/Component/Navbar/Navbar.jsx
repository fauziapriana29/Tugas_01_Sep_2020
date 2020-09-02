import React, { Component } from "react";
import Icon from './IconTodo.png'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navMenu">
        <img
          src={Icon}
          width="30"
          height="30"
          className="icon"
          alt=""
          loading="lazy"
            />
            <h3 className="brand">Todo List App</h3>
      </nav>
    );
  }
}

export default Navbar

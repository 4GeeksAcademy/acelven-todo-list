import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoList from './todo.jsx'
  
var destination = document.querySelector("#app");
  
ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);

export default Home;

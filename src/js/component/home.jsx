import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import TodoList from './todo.jsx'
  
var destination = document.querySelector("#app");
  
ReactDOM.render(
    <div>
		<span>Click on a task to delete it.</span>
        <TodoList/>
    </div>,
    destination
);

export default Home;

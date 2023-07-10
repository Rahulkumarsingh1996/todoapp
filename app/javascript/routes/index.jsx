import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Todos from "../components/Todos";
import Todo from "../components/Todo";
import NewTodo from "../components/NewTodo";

export default (
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/todos" exact element={<Todos />} />
      <Route path="/todo/:id" exact element={<Todo />} />
      <Route path="/new_todo" exact element={<NewTodo />} />
    </Routes>
  </Router>
);
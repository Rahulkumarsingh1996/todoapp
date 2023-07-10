import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const url = "/api/v1/todos/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => {
        setTodos(res);
        setFilteredTodos(res);
      })
      .catch(() => navigate("/"));
  }, []);

  useEffect(() => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [todos, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

 

  const allTodos = filteredTodos.map((todo, index) => {
    const completionStatus =
      todo.title.trim() !== "" && todo.description.trim() !== ""
        ? "complete"
        : "pending";
  
    return (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title"><span>Title:</span>{todo.title}</h5>
            <p className="card-title"><span>Description:</span>{todo.description}</p>
            <span>Status:</span><input type="checkbox" checked={todo.completed} /><br/>
            <Link to={`/todo/${todo.id}`} className="btn custom-button">
              View List
            </Link>
          </div>
        </div>
      </div>
    );
  });
  
  const noTodo = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No todos yet. Why not <Link to="/new_todo">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">TodoList for every occasion</h1>
          <p className="lead text-muted">
            We’ve pulled together our most popular list, our latest
            additions, and our editor’s picks, so there’s sure to be something
            tempting for you to try and Improves memory.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          
          <div className="text-end mb-3 col-md-12">
            <Link to="/new_todo" className="btn custom-button">
              Create New Todos
            </Link>
          </div>
         
          <div className="mb-3">
            <input
              type="text"
              value={filter}
              onChange={handleFilterChange}
              className="form-control "
              placeholder="Search...."
            />
          </div>
          <div className="row">
            {filteredTodos.length > 0 ? allTodos : noTodo}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Todos;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NewTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  const stripHtmlEntities = (str) => {
    return String(str)
      .replace(/\n/g, "<br> <br>")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  };

  const onChange = (event, setFunction) => {
    setFunction(event.target.value);
  };

  const StatusChange = (event) => {
    setCompleted(event.target.checked);
    console.log(completed);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const url = "/api/v1/todos/create";

    if (title.length === 0 || description.length === 0 )
      return;

    const body = {
      title,
      description,
      completed: event.target.checked,
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => navigate("/todos"))
      // `/todo/${response.id}`
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-lg-6 offset-lg-3">
          <h1 className="font-weight-normal mb-5">
            Add a new todos to our awesome todo collection.
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="titleName">Todo title</label>
              <input
                type="text"
                name="title"
                id="titleName"
                className="form-control"
                onChange={(event) => onChange(event, setTitle)}
              />
            </div>
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="5"
              onChange={(event) => onChange(event, setDescription)}
            />
            <label htmlFor="status">Status</label>
            <input
              type="checkbox"
              className="form-check-input"
              checked={completed}
              onChange={StatusChange}
              readOnly
            />
           
            <div className="d-flex justify-content-lg-between">
              <button type="submit" className="btn custom-button mt-3">
                Create Todos
              </button>
              <Link to="/todos" className="btn btn-warning mt-3">
                Back to todos
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTodo;

/*import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ ingredients: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setTodo(response))
      .catch(() => navigate("/todos"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteTodo = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/todos"))
      .catch((error) => console.log(error.message));
  };


//   const ingredientList = () => {
//     let ingredientList = "No ingredients available";

//     if (todo.ingredients.length > 0) {
//       ingredientList = todo.ingredients
//         .split(",")
//         .map((ingredient, index) => (
//           <li key={index} className="list-group-item">
//             {ingredient}
//           </li>
//         ));
//     }

//     return ingredientList;
//   };

const ingredientList = () => {
    let ingredientListElement = <li className="list-group-item">No ingredients available</li>;
  
    if (todo.ingredients && todo.ingredients.length > 0) {
      const ingredients = todo.ingredients.split(",").map((ingredient, index) => (
        <li key={index} className="list-group-item">
          {ingredient}
        </li>
      ));
      ingredientListElement = ingredients;
    }
  
    return ingredientListElement;
  };
  

  const todoInstruction = addHtmlEntities(todo.instruction);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
      
        <div className="overlay bg-dark position-absolute" />
       
        <p className="display-4 position-relative text-white">{todo.description}</p>
      </div>
      <div className="container py-5 text-center">
        <div className="row">
         
          <div className="col-sm-12 col-lg-5">
            <h3 className="mb-2">{todo.title}</h3>
          </div>
          <div className="col-sm-12 col-lg-7 d-flex justify-content-end gap-3">
            <button
              type="button"
              className="btn btn-danger" onClick={deleteTodo}
            >
              Delete List
            </button>
            <Link to="/todos" className="btn btn-dark">
                Back to todos
              </Link>
          </div>
        </div>

       
      </div>
     
    </div>
  );
};

export default Todo;

*/


import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";



const Todo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({ ingredients: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => {
        setTodo(response);
      })
      .catch(() => navigate("/todos"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  const deleteTodo = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/todos"))
      .catch((error) => console.log(error.message));
  };

  const ingredientList = () => {
    let ingredientListElement = <li className="list-group-item">No ingredients available</li>;

    if (todo.ingredients && todo.ingredients.length > 0) {
      const ingredients = todo.ingredients.split(",").map((ingredient, index) => (
        <li key={index} className="list-group-item">
          {ingredient}
        </li>
      ));
      ingredientListElement = ingredients;
    }

    return ingredientListElement;
  };

  const todoInstruction = addHtmlEntities(todo.instruction);

  return (
    <div className="rahul">
      <div className="hero position-relative d-flex align-items-center justify-content-center" id="hero_div">
        <div className="overlay bg-dark position-absolute" />
        <p className="display-4 position-relative text-white">{todo.description}</p>
      </div>
      <div className="container py-5 text-center">
        <div className="row">
          <div className="col-sm-12 col-lg-4">
          <span>states</span>
            <h3 className="mb-2">{todo.title}</h3>
          </div>
          <div className="col-sm-12 col-lg-9 d-flex justify-content-end gap-3">
            <button type="button" className="btn btn-danger" onClick={deleteTodo}>
              Delete List
            </button>
            <Link to="/todos" className="btn btn-dark">
              Back to todos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

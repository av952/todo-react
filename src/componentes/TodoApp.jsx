import React, { useState } from "react";
import Todo from "./Todo";
import "./todo.css";

export const TodoApp = () => {
  const [title, setTitle] = useState("hola");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      title: title,
      completed: false,
    };

    setTodo([...todo, newTodo]);

    setTitle("");
  }

  function onUpdate(id, value) {
    const temp = [...todo];
    const item = temp.find((el) => el.id == id);
    //le asignamos el valor que hemos modificado a item.title para ser mostrado como el valor actualizado
    item.title = value;
  }

  function onDelete(id) {
    const temp = todo.filter((el) => el.id != id);
    setTodo(temp);
  }

  const mostrarDatos = todo.map((el) => (
    <Todo key={el.id} item={el} onUpdate={onUpdate} onDelete={onDelete} />
  ));

  return (
    <div className="todo-container">
      <form className="todo-create-form" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          className="todo-input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type="submit" value="Create todo" className="button-create" />
      </form>

      <div className="todos-container">{mostrarDatos}</div>
    </div>
  );
};

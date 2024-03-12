import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { TodoContext } from "../context/todoContext";
import { ITodo, TodoContextType } from "../@types/todo";
import { Button } from "@mui/base";

function TodoShow() {
  const { todos } = useContext(TodoContext) as TodoContextType;
  return (
    <>
      {todos.map((todo: ITodo) => (
        <>
          <h1>{todo.title}</h1>
          <p>{todo.title}</p>
        </>
      ))}
    </>
  );
}

export default TodoShow;

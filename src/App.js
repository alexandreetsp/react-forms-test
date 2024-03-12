import logo from "./logo.svg";
import "./App.css";
import TextField, { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import FormWithoutHookForm from "./components/FormWithoutHookForm";
import FormDemo from "./FormDemo";
import TodoForm from "./components/TodoForm";
import TodoProvider from "./context/todoContext";
import TodoShow from "./components/todoShow";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        {/*<FormDemo></FormDemo>*/}
        <TodoProvider>
          <TodoForm></TodoForm>
          <TodoShow></TodoShow>
        </TodoProvider>
      </Container>
    </div>
  );
}

export default App;

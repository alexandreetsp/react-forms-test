import logo from "./logo.svg";
import "./App.css";
import TextField, { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { Button, Paper } from "@mui/material";
import FormWithoutHookForm from "./components/FormWithoutHookForm";
import FormDemo from "./FormDemo";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <FormDemo></FormDemo>
      </Container>
    </div>
  );
}

export default App;

import { Button } from "@mui/material";
import * as REACT from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ITodo, TodoContextType } from "../@types/todo";
import TodoProvider, { TodoContext } from "../context/todoContext";

interface IFormInput {
  title: String;
  description: String;
}

function TodoForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();

  const [formData, setFormData] = REACT.useState<ITodo | {}>();

  const onSubmit = (data: IFormInput) => {
    handleSaveTodo(data);
  };

  const handleSaveTodo = (formData: ITodo | any) => {
    saveTodo(formData);
  };
  const { saveTodo } = useContext(TodoContext) as TodoContextType;

  return (
    <form>
      <div>
        <h1>Title</h1>
        <input defaultValue={"title"} {...register("title")}></input>
      </div>
      <div>
        <h1>Description</h1>
        <input
          defaultValue={"description"}
          {...register("description")}
        ></input>
      </div>

      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </form>
  );
}

export default TodoForm;

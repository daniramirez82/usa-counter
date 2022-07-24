import { useState } from "preact/hooks";
import styles from "./Todo.module.scss";
import InputTodo from "./InputTodo";

const Todo = () => {
  const [listTodo, setListTodo] = useState([]);

  const addATask = (task) => {
    setListTodo((oldState) => {
      return [...oldState, task];
    });
  };

  return (
    <>
      <InputTodo addATask={addATask} />

      {listTodo.reverse().map((t)=><p>{t}</p>)}
      <p>thing to do together</p>
    </>
  );
};

export default Todo;

import { useState, useEffect } from "preact/hooks";
import styles from "./Todo.module.scss";
import InputTodo from "./InputTodo";
import { addNewTask, getAllTask, deleteTask } from "../../db/dataBase";

const initialState = [{ id: null, task: null }];

const Todo = () => {
  const [listTodo, setListTodo] = useState(initialState);

  useEffect(async () => {
    const listFromServer = await getAllTask();
    setListTodo(listFromServer);
  }, []);

  const addATask = async (task) => {
    const savedTaskId = await addNewTask(task);

    setListTodo((oldState) => {
      const arr = [...oldState]
      arr.unshift({ id: savedTaskId, task });
      return arr;
    });
  };

  const deleteATask = async (e) => {
    const deletedID = await deleteTask(e.target.dataset.id);
    const tempTasksArr = listTodo.filter((t) => t.id !== deletedID);
    setListTodo(tempTasksArr);
  };

  return (
    <>
      <InputTodo addATask={addATask} />
      <ul>
        {listTodo.map((t) => (
          <li key = {t.id} data-id={t.id}>
            {t.task}::::
            <span data-id={t.id} onClick={deleteATask}>
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;

import { useState, useEffect } from "preact/hooks";
import styles from "./Todo.module.scss";
import InputTodo from "./InputTodo";
import ListItem from "./ListItem";
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
      const arr = [...oldState];
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
    <div className={styles["todo-wrapper"]}>
      <InputTodo addATask={addATask} />
      <div className={styles.list}>
        <ul className={styles.ul}>
          {listTodo.map((t) => (
            <ListItem id={t.id} task={t.task} onDeleteATask={deleteATask} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;

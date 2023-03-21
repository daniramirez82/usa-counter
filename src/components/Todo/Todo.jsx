import { useEffect } from "preact/hooks";
import styles from "./Todo.module.scss";
import InputTodo from "./InputTodo";
import ListItem from "./ListItem";
import { addNewTask, getAllTask, deleteTask } from "../../db/dataBase";
import { useSignal } from "@preact/signals";

const Todo = () => {
  const todos = useSignal([]);

  useEffect(async () => {
    const listFromServer = await getAllTask();
    todos.value = listFromServer;
  }, []);

  const addATask = async (task) => {
    try {
      const savedTaskId = await addNewTask(task);
      todos.value = [...todos.value, { id: savedTaskId, task: task }];
    } catch (err) {
      console.log(err);
    }
  };

  const deleteATask = async (e) => {
    try {
      const deletedID = await deleteTask(e.target.dataset.id);
      todos.value = todos.value.filter((t) => t.id !== deletedID);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles["todo-wrapper"]}>
      <div className={styles.todo}>
        <div className={styles["todo-input"]}>
          <InputTodo addATask={addATask} />
        </div>
        <div className={styles.list}>
          <ul className={styles.ul}>
            {todos.value.map((t) => (
              <ListItem id={t.id} task={t.task} onDeleteATask={deleteATask} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;

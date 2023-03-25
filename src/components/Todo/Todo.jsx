import { useEffect } from "preact/hooks";
import styles from "./Todo.module.scss";
import InputTodo from "./InputTodo";
import ListItem from "./ListItem";
import { addNewTask, getAllTask, deleteTask, updateTaskInDB } from "../../db/dataBase";
import { useSignal } from "@preact/signals";

const Todo = () => {
  const todos = useSignal([]);

  useEffect(async () => {
    const listFromServer = await getAllTask();
    todos.value = listFromServer;
  }, []);

  const addATask = async (task) => {
    try {
      const taskToSave = {
        task,
        done: false,
        timestamp: Date.now(),
      };
      const savedTaskId = await addNewTask(taskToSave);
      todos.value = [...todos.value, { id: savedTaskId, ...taskToSave }];
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

  const updateTask = async (checkedValue, taskId)=>{
   const idToChange = await updateTaskInDB(taskId, checkedValue);
   const taskIndex = todos.value.findIndex(t=> t.id === idToChange);
   if(taskIndex >= 0){
    todos.value[taskIndex].done = checkedValue;
   }
  }

  return (
    <div className={styles["todo-wrapper"]}>
      <div className={styles.todo}>
        <div className={styles["todo-input"]}>
          <InputTodo addATask={addATask} />
        </div>
        <div className={styles.list}>
          <ul className={styles.ul}>
            {todos.value.map((t) => (
              <ListItem
                id={t.id}
                task={t.task}
                done={t.done}
                onUpdateTask ={updateTask}
                onDeleteATask={deleteATask}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;

import styles from "./InputTodo.module.scss";
import {useSignal} from "@preact/signals"

const InputTodo = ({addATask}) => {

    const todo= useSignal("");

    const sendNewTask = (e)=>{
        e.preventDefault();
        addATask(todo.value);
        todo.value = "";
    }

  return (
    <div className={styles["input-wrapper"]}>
      <form action="" onSubmit={sendNewTask}>
        <input value={todo.value} onInput={(e)=> todo.value = (e.target.value)} type="text" placeholder="Todo with Dad???" />
        <input disabled={!todo} type="submit" value="ADD" className={styles.button} /> 
      </form>
    </div>
  );
};

export default InputTodo;

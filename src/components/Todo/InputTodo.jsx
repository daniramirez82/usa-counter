import styles from "./InputTodo.module.scss";
import { useState } from "preact/hooks";

const InputTodo = ({addATask}) => {
    const [task, setTask] = useState();
    const sendNewTask = (e)=>{
        e.preventDefault();
        addATask(task);
        setTask('');
    }
  return (
    <div className={styles["input-wrapper"]}>
      
      <form action="" onSubmit={sendNewTask}>
        <input value={task} onChange={(e)=> setTask(e.target.value)} type="text" placeholder="Todo with Dad???" />
        <input type="submit" value="ADD" className={styles.button} /> 
        
      </form>
    </div>
  );
};

export default InputTodo;

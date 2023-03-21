import styles from "./ListItem.module.scss";

const ListItem = ({ id, task, done, onUpdateTask, onDeleteATask }) => {
  const handleCheck = (e) => {
    onUpdateTask(e.target.checked, id);
  };
  return (
    <li key={id} className={styles["item-wrapper"]}>
      <label htmlFor="id">
        <div className={styles["item-content"]}>
          <span className={styles.container}>
            <input type="checkbox" checked={done} onChange={handleCheck} />
            <span className={styles.checkmark}></span>
          </span>
          <span className={styles["item-task"]}>{task}</span>
        </div>
        <span
          data-id={id}
          className={styles["icon-cont"]}
          onClick={onDeleteATask}
        >
          <img data-id={id} src="trash-icon.svg" alt="trash icon" />{" "}
        </span>
      </label>
    </li>
  );
};

export default ListItem;

import styles from "./ListItem.module.scss";

const ListItem = ({ id, task, onDeleteATask }) => {
  return (
    <li key={id} className={styles["item-wrapper"]}>
      <label htmlFor="id">
        <span className={styles.container}>

          <input type="checkbox" />
          <span className={styles.checkmark}></span>
        </span>
        <span>{task}</span>
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

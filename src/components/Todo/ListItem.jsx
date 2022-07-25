import styles from './ListItem.module.scss';

const ListItem = ({id, task, onDeleteATask})=>{

    return(
        <li key= {id} className={styles['item-wrapper']}>
        {task} <span data-id={id} className={styles['icon-cont']} onClick={onDeleteATask}> <img data-id={id} src="trash-icon.svg" alt="trash icon" /> </span> 

        </li>
    )
}

export default ListItem;
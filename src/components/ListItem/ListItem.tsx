import { Link } from "react-router-dom";
import { Todo } from "../../models/todo-item";
import styles from './ListItem.module.scss'

export const ListItem = ({todo}: {todo: Todo}) =>{
  const classes = `${styles.link} ${todo.isCompleted ? styles.done : styles.notDone}`

  return (
    <Link to={`/list/${todo.id}`} className={classes}>{todo.title}</Link>
  )

}
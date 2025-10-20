import { Todo } from "../../../models/todo-item";


export const ToDoListItem = (props:{todoItem: Todo, updateTodo: Function, deleteTodo: Function}) => {

  return (
    <li className="todo-list-item__wrapper">
      <span>{props.todoItem.title}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash" onClick={() => props.deleteTodo(props.todoItem)}></button>
        <button className={props.todoItem.isCompleted ? 'btn-check': 'btn-uncheck'} onClick={() => props.updateTodo(props.todoItem)}></button>
      </div>
    </li>
  );
};

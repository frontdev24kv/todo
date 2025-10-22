import { Todo } from "../../../models/todo-item";


export const ToDoListItem = ({todoItem, updateTodo, deleteTodo}:{todoItem: Todo, updateTodo: Function, deleteTodo: Function}) => {
  const {title, isCompleted } = todoItem
  
  return (
    <li className="todo-list-item__wrapper">
      <span>{title}</span>
      <div className="todo-list-item__buttons">
        <button className="btn-trash" onClick={() => deleteTodo(todoItem)}></button>
        <button className={isCompleted ? 'btn-check': 'btn-uncheck'} onClick={() => updateTodo(todoItem)}></button>
      </div>
    </li>
  );
};

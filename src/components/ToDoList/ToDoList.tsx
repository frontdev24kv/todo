import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { Todo } from '../../models/todo-item';

export const ToDoList = (props: {todos: Todo[], updateTodo: Function, deleteTodo: Function}) => {


  const notCompletedTodos = () => {
    return props.todos
      .filter((todo) => !todo.isCompleted)
      .map((todo) => <ToDoListItem todoItem={todo} key={todo.id} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>);
  };
  
  const completedTodos = () => {
    return props.todos
      .filter((todo) => todo.isCompleted)
      .map((todo) => <ToDoListItem todoItem={todo} key={todo.id} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{notCompletedTodos()}</ul>

      <ul className="todo-list completed">{completedTodos()}</ul>
    </div>
  );
};

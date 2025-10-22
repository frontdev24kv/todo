import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { Todo } from '../../models/todo-item';

export const ToDoList = ({todos, updateTodo, deleteTodo}: {todos: Todo[], updateTodo: Function, deleteTodo: Function}) => {


  const notCompletedTodos = () => {
    return todos
      .filter((todo) => !todo.isCompleted)
      .map((todo) => <ToDoListItem todoItem={todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>);
  };
  
  const completedTodos = () => {
    return todos
      .filter((todo) => todo.isCompleted)
      .map((todo) => <ToDoListItem todoItem={todo} key={todo.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list failed">{notCompletedTodos()}</ul>

      <ul className="todo-list completed">{completedTodos()}</ul>
    </div>
  );
};

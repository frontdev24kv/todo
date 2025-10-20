import { Form } from '../components/Form/Form';
import { Header } from '../components/Header/Header';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { Todo } from '../models/todo-item';
import { useState } from 'react';

export const ToDoListPage = () => {


  const [todoList, setTodoList] = useState<Todo[]>([]);
  const createNewTodo = (text: string) => {
    const newTodo: Todo = {
      id: todoList.length,
      title: text,
      isCompleted: false
    };
    setTodoList([...todoList, newTodo]);
  };

  const updateTodo = (todoItem: Todo) => {
    const updatedTodos: Todo[] = todoList.map((todo) => {
      if (todo.id === todoItem.id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  };

  const deleteTodo = (todoItem: Todo) => {
    setTodoList(() => todoList.filter(todo => todo.id !== todoItem.id))
    
  }
  return (
    <>
      <Header />
      <Form createNewTodo={createNewTodo} />
      <ToDoList todos={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
    </>
  );
};

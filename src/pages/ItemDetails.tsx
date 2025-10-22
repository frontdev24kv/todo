import { useNavigate, useParams } from 'react-router-dom';
import { Todo } from '../models/todo-item';
import { useEffect, useState } from 'react';

interface ComponentProps {
  todos: Todo[];
}

export const ItemDetails = ({ todos }: ComponentProps) => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [todo, setTodo] = useState<Todo>()

  useEffect(() => {
    const currentTodo = todos.filter((todo) => todo.id + '' === id)[0];
    if(currentTodo){
      setTodo(currentTodo)
    }else{
      navigate('/404')
    }
  }, [todos, id, navigate]);
  return (
    <div className="container">
      <h1>Title: {todo?.title}</h1>
    </div>
  );
};

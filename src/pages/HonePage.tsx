import { ListItem } from "../components/ListItem/ListItem"
import { Todo } from "../models/todo-item"

export const HomePage = ({todos}: {todos: Todo[]})=> {
  return (
    <div className='container'>
      {todos.map((todo: Todo) => <ListItem todo={todo} key={todo.id}/>)}
    </div>
  )
}

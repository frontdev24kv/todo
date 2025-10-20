import {ChangeEvent, useState} from "react";
import styles from './Form.module.scss';

export const Form = (props: {createNewTodo: Function}) => {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const formSubmit = () => {
    if(taskTitle.trim()){
      props.createNewTodo(taskTitle)
    }
    setTaskTitle('')
  }

  
  return (
    <div className={styles.wrapper}>
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input type="text" onChange={e => setTaskTitle(e.target.value)} value={taskTitle}/>
          <button></button>
        </label>
      </form>
    </div>
  );
};

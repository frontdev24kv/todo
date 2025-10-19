import styles from './Form.module.scss'

export const Form = () => {
  return (
    <div className={styles.wrapper}>
      <form action="#">
        <label>
          <input type="text" />
          <button></button>
        </label>
      </form>
    </div>
  );
};

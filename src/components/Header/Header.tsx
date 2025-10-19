import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={`${styles.link} ${styles.active}`} href="/">
          ToDo
        </a>
      </div>
    </header>
  );
};

import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';


export const Header = () => {

  const getActiveLink = ({isActive}: {isActive: boolean}): string => {
    return isActive ? `${styles.active} ${styles.link}` : styles.link
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink className={getActiveLink} to='/'>Home</NavLink>                 
        <NavLink className={getActiveLink} to='/todo'>Todo</NavLink>                 
      </div>
    </header>
  );
};

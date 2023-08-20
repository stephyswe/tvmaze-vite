import styles from './container.module.css';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.container}>
    <div className={styles.innerContainer}>{children}</div>
  </div>
);

export default Container;

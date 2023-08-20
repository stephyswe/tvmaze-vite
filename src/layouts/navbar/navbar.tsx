import { Outlet } from 'react-router-dom';

import Logo from '../../components/logo/logo';
import SearchDefault from '../../components/search/search';
import Container from '../container/container';

import styles from './navbar.module.css';

const Navbar = () => (
  <Container>
    <div className={styles.container}>
      <Logo />
      <div className={styles.navbarSearch}>
        <SearchDefault />
      </div>
    </div>
    <Outlet />
  </Container>
);

export default Navbar;

import { useSelector } from 'react-redux';
import type { RootState } from "@/app/Redux/store";

import Search from './Search';

import Button from '../../Buttons/Button';

import styles from '../template.module.scss'

const Header = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return <header className={styles.header}>
    <Search />
    <Button link={isAuth ? '/profile' : '/login'}>
      {isAuth ? 'Профіль' : 'Увійти'}
    </Button>
  </header>
}

export default Header;
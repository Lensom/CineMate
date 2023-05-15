import { useSelector } from 'react-redux';
import type { RootState } from "@/app/Redux/store";
import Link from "next/link";

import Button from '../../Buttons/Button';

import styles from '../template.module.scss'

const Header = () => {
  const { isAuth } = useSelector((state: RootState) => state.auth);

  return <header className={styles.header}>
    search
    <Button link={isAuth ? '/profile' : '/login'}>
      {isAuth ? 'Профіль' : 'Увійти'}
    </Button>
  </header>
}

export default Header;
import Link from "next/link";
import Image from "next/image";

import Menu from './Menu';

import styles from '../template.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles["logotype-wrapper"]}>
        <Link href="#" className={styles['logotype-link']}>
          <Image
            src="/logotype.svg"
            width={240}
            height={100}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className={styles["menu-wrapper"]}>
        <Menu />
      </div>
    </aside>
  )
}

export default Sidebar
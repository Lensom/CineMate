import Link from "next/link";
import Image from "next/image";

import Menu from './Menu';

import styles from '../template.module.scss'

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className="logotype-wrapper">
        <Link href="#">
          <Image
            src="/logotype.svg"
            width={120}
            height={50}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="menu-wrapper">
        <Menu />
      </div>
    </aside>
  )
}

export default Sidebar
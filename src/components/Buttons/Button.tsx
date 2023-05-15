import Link from 'next/link'
import styles from './buttons.module.scss'

interface IProps {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link }: IProps) => {
  return <Link href={link} className={styles.button}>
    {children}
  </Link>
}

export default Button
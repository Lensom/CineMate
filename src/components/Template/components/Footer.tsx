import styles from '../template.module.scss'

interface IProps {
  children: React.ReactNode
}

const Footer = ({ children }: IProps) => {
  return <footer className={styles.footer}>
    {children}
    footer
  </footer>
}

export default Footer;
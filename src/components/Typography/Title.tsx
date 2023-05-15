import { FC } from 'react'
import cn from 'classnames'

import styles from './typography.module.scss'

interface IProps {
  children: string;
  level: number;
}

const Title: FC<IProps> = ({ children, level }) => {
  const CustomTitle = `h${level}` as keyof JSX.IntrinsicElements;

  return <CustomTitle className={cn(styles.title, styles[`title-${level}`])}>{children}</CustomTitle>
}

export default Title
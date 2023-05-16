import { FC } from 'react'
import cn from 'classnames'

import styles from './typography.module.scss'

interface IProps {
  children: string | React.ReactNode;
  level: number;
  isTitle?: boolean;
  className?: string;
}

const Text: FC<IProps> = ({ children, level, isTitle, className = "" }) => {
  const CustomTag = `${isTitle ? 'h' : 'p'}${isTitle ? level : ''}` as keyof JSX.IntrinsicElements;

  return (
    <CustomTag className={cn(styles.title, styles[`title-${level}`], { [styles[className]]: className })}>{children}</CustomTag>
  )
}

export default Text
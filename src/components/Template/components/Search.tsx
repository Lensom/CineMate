'use client'

import { useState } from 'react'

import Image from 'next/image'
import cn from 'classnames'

import styles from '../template.module.scss'

import SearchSVG from "images/icons/search.svg"
import CloseSVG from "images/icons/close.svg"

const Search = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  const onClose = () => {
    setValue("")
    setIsOpen(false)
  }

  return (
    <div className={cn(styles["search-box"], { [styles.open]: isOpen })}>
      <input className={styles['search-input']} type="text" placeholder="Я шукаю" onChange={(e) => setValue(e.target.value)} value={value} />
      <span className={styles['search']} onClick={() => setIsOpen(true)}>
        <Image src={SearchSVG.src} className={styles["search-icon"]} alt="Пошук" width={24} height={24} />
      </span>
      <Image src={CloseSVG.src} className={styles["search-close"]} onClick={onClose} width={24} height={24} alt="Закрити пошук" />
    </div>
  )
}

export default Search
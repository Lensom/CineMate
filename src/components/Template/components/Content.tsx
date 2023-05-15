'use client';

import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';

import Breadcrumbs from "./Breadcrumbs";

import db from '@/data/db.json';

import styles from '../template.module.scss'

type Props = {
  children: React.ReactNode
}

const Content = ({ children }: Props) => {
  const [breads, setBreads] = useState<any>([])
  const path = usePathname();

  useEffect(() => {
    const data = db.find((page) => page.slug === path);
    setBreads(data?.breadcrumbs)
  }, [path])

  return <section className={styles.content}>
    <Breadcrumbs
      items={breads}
    />
    <div className={styles['content-inner']}>
      {children}
    </div>
  </section>
}

export default Content
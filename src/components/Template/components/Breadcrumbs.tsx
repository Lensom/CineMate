'use client'

import Link from 'next/link'
import Text from "@/components/Typography/Text"

import styles from '../template.module.scss'

export type CrumbItem = {
  title: string;
  url?: string;
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Crumb = ({ title, url }: CrumbItem) => {
  if (url) {
    return <Link href={url || ""} className={styles['breadcrumb']}>
      {title}
    </Link>
  }

  return <Text level={5}>{title}</Text>
}

const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => (
  <div className={styles['breadcrumbs']}>
    {items.map(({ title, url }) => (
      <Crumb key={url} title={title} url={url} />
    ))}
  </div>
);

export default Breadcrumbs;


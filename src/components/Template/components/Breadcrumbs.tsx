'use client'

import { Breadcrumb } from "antd";
import Link from 'next/link'

// defining the Props
export type CrumbItem = {
  url?: string;
  title: string;
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  const breadItems = items.map(({ url, title }) => (url ? { title: <Link href={url}>{title}</Link> } : { title }))
  return (
    <Breadcrumb items={breadItems} style={{ margin: "16px 0", color: 'white' }} />
  );
};

export default Breadcrumbs;


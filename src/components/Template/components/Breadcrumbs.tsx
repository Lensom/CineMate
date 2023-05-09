'use client'

import { Breadcrumb } from "antd";
import  Link  from 'next/link'

import { ReactNode } from "react";
// defining the Props
export type CrumbItem = {
  label: ReactNode; 
  path: string; 
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {


    const breadItems = items.map(({url, title}) => {

        if (url) {
            return  {
                title: <Link href={url}>{title}</Link> 
            }
        } else {
           return {title}
        }


    })



    return (
        <Breadcrumb items={breadItems} style={{ margin: "16px 0" }} />
    );
  };

  export default Breadcrumbs;


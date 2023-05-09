"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GetServerSideProps, NextPage } from "next";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme, Button } from "antd";
import Breadcrumbs, { CrumbItem } from "./components/Breadcrumbs";
import db from '../../data/db.json';
import { usePathname } from 'next/navigation';

const { Header, Content, Footer, Sider } = Layout;

type BreadcrumbData = { // data returned by server
  text: string;
  url: string;
};
// data for this page that we're expecting from backend
type Props = {
  breadcrumbs: BreadcrumbData[];
  courseTitle: string;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Мій профіль", "1", <FileOutlined />),
  getItem("Мої списки", "2", <PieChartOutlined />),
  getItem("Мої оцінки", "sub1", <UserOutlined />, [
    getItem("Фільми", "3"),
    getItem("Серіали", "4"),
    getItem("TV shows", "5"),
  ]),
  getItem("Переглянути пізніше", "sub2", <TeamOutlined />, [
    getItem("Фільми", "6"),
    getItem("Серіали", "7"),
    getItem("TV shows", "8"),
  ]),
];



const Template = ({ children, breadcrumbs }: { children: React.ReactNode, breadcrumbs: CrumbItem[] }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [breads, setBreads] = useState([])
  const path = usePathname();
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const breadCrumbsData: CrumbItem[] = breadcrumbs?.map((c) => {
    return {
      label: c.text,
      path: c.url,
    };
  });

  useEffect(() => {
    const data = db.find((page) => page.slug === path);
    console.log(data)
    setBreads(data?.breadcrumbs)
  }, [path])

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div>
          <Link href="/">
            <Image
              src="/logotype.svg"
              width={120}
              height={50}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 10,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button type="primary">
            <Link href="/login">Увійти</Link>
          </Button>
        </Header>
        <Content style={{ margin: "0 16px" }}>
        <Breadcrumbs
          items={breads}
        />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Template;

// export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
//   const slug = ctx.params?.slug;
//   console.log(ctx)
//   // simulate a call to the backend server here to get the data
//   const data = db.find((page) => page.slug === slug);
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       breadcrumbs: data.breadcrumbs || [],
//       courseTitle: data.courseTitle,
//     },
//   };
// };
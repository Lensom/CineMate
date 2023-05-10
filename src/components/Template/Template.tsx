"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Montserrat } from "next/font/google";

import type { MenuProps } from "antd";
import { Layout, Menu, theme, Button, ConfigProvider } from "antd";
import Breadcrumbs from "./components/Breadcrumbs";

import db from '../../data/db.json';

import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export type CrumbItem = {
  url?: string;
  title: string;
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
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



const Template = ({ children }: { children: React.ReactNode, }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [breads, setBreads] = useState<any>([])
  const path = usePathname();
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  useEffect(() => {
    const data = db.find((page) => page.slug === path);
    setBreads(data?.breadcrumbs)
  }, [path])

  return (
    <ConfigProvider theme={{
      token: {
        fontFamily: montserrat.style.fontFamily,
        colorPrimary: '#1B2432'
      },
      components: {
        Layout: {
          colorBgHeader: '#000814' // colorBgBase -3% lightness, i've pre-calculated these values manually, but it'd be smart to use color.js or something like that to manage these manipulations
        },
        Menu: { // if you use "dark" theme on menu
          colorItemBg: 'transparent', // colorBgBase -3% lightness
          colorSubItemBg: 'transparent', // colorBgBase -6% lightness,
          colorItemBgSelected: '#1B2432',
        }
      }
    }}>
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
                height: '100%'
              }}
            >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>

  );
};

export default Template;


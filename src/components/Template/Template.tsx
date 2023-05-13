"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { Montserrat } from "next/font/google";


import { Layout, theme, Button, ConfigProvider } from "antd";
import { getCookie } from 'cookies-next';

import type { RootState } from "@/app/Redux/store";
import db from '@/data/db.json';

import { userInfoRequest } from "features/user/userSlice";
import Breadcrumbs from "./components/Breadcrumbs";
import Menu from './components/Menu';

import {
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



const Template = ({ children }: { children: React.ReactNode, }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [breads, setBreads] = useState<any>([])
  const path = usePathname();
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  const { isAuth } = useSelector((state: RootState) => state.auth);


  useEffect(() => {
    const data = db.find((page) => page.slug === path);
    setBreads(data?.breadcrumbs)
  }, [path])

  const dispatch = useDispatch();
  const userToken = getCookie('cmAccessToken') as void;

  useEffect(() => {
    if (String(userToken)) {
      dispatch(userInfoRequest(userToken))
    }

  }, [userToken])

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
          <Menu />
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
              {isAuth ? <Link href="/profile">Профіль</Link> : <Link href="/login">Увійти</Link>}
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


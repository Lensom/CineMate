"use client";

import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { getCookie } from 'cookies-next';

import { userInfoRequest } from "features/user/userSlice";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from './components/Content';
import Footer from './components/Footer';

import styles from './template.module.scss'

export type CrumbItem = {
  url?: string;
  title: string;
};
export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Template = ({ children }: { children: React.ReactNode, }) => {

  const dispatch = useDispatch();
  const userToken = getCookie('cmAccessToken') as void;

  useEffect(() => {
    if (String(userToken)) {
      dispatch(userInfoRequest(userToken))
    }

  }, [userToken])

  return (
    <main className={styles.main} style={{ minHeight: "100vh" }}>
      <Sidebar />
      <section className={styles.wrapper}>
        <Header />
        <Content>
          {children}
        </Content>
        <Footer>Footer</Footer>
      </section>
    </main>

  );
};

export default Template;


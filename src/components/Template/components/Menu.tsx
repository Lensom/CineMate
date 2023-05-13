import { Menu } from "antd";
import type { MenuProps } from "antd";
import Link from "next/link";

import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";


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
  getItem(<Link href="/user/profile">Мій профіль</Link>, "1", <FileOutlined />),
  getItem(<Link href="/user/lists">Мої списки</Link>, "2", <PieChartOutlined />),
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


const mainMenu = () => {
  return <Menu
    theme="dark"
    defaultSelectedKeys={["1"]}
    mode="inline"
    items={items}
  />
}

export default mainMenu;
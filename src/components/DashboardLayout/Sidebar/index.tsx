import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import styles from "./Sidebar.module.scss";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import logoCompany from "./../../../../public/assets/png/logoCompany.png";
import Image from "next/image";

interface SidebarProps {
  toggle: boolean;
  handleToggle: any;
}

export default function Sidebar(props: SidebarProps) {
  const { toggle, handleToggle } = props;

  const shareLink = (e: any) => {
    e.preventDefault();
  };

  return (
    <aside className={styles.sidebar}>
      <ProSidebar breakPoint="xxl" toggled={toggle} onToggle={handleToggle}>
        <SidebarContent>
          <div className={styles.logoWrapper}>
            {/* <Image src={logoCompany} /> */}
          </div>
          <Menu className={`menu`}>
            <MenuItem>
              Beri Masukkan
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem onClick={shareLink}>
              Bagikan Aplikasi
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
            <MenuItem>
              Nilai Aplikasi
              <Link href="#">
                <a></a>
              </Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </aside>
  );
}

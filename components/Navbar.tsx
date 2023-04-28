import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";
const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];
export const NavBar = () => {
  return (
    <>
      <nav className={styles["menu-container"]}>
        {menuItems.map((m) => (
          <ActiveLink key={m.text} href={m.href} text={m.text} />
        ))}
      </nav>
    </>
  );
};

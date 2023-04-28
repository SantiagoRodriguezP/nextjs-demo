import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { NavBar } from "../Navbar";
import styles from "./Layout.module.css";

export const MainLayout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Página curso FH</title>
        <meta
          name="description"
          content="Página generada en curso con Golden"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} `}>
        <NavBar />
        {children}
      </main>
    </>
  );
};

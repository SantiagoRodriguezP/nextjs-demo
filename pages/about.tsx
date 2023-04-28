import { Inter } from "next/font/google";
import Link from "next/link";
import { MainLayout } from "../components/Layouts/MainLayout";
import styles from "../styles/global.module.css";
import { DarkLayout } from "../components/Layouts/DarkLayout";
import { ReactChild, ReactComponentElement, ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <>
      <MainLayout>
        <div className={styles.description}>
          <p>
            <Link href="/" as="inicio">
              Home
            </Link>
          </p>
        </div>

        <div className={styles.center}>
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          /> */}
          <h1>About</h1>
        </div>
      </MainLayout>
    </>
  );
}

AboutPage.getLayout = function getLayout(page:ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};

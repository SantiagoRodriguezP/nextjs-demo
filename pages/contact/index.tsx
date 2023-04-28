import { Inter } from "next/font/google";
import { MainLayout } from "../../components/Layouts/MainLayout"
import styles from "../../styles/global.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
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
          <h1>Contact</h1>
        </div>
      </MainLayout>
    </>
  );
}

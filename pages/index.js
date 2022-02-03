import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas delectus
        sint reiciendis similique ipsum asperiores in distinctio, dolorem eum
        quis natus pariatur voluptate maxime accusamus cupiditate earum est
        repellat doloremque!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas delectus
        sint reiciendis similique ipsum asperiores in distinctio, dolorem eum
        quis natus pariatur voluptate maxime accusamus cupiditate earum est
        repellat doloremque!
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  );
}

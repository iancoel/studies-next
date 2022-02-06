import Head from 'next/head';
import styles from '../../styles/Ninjas.module.css';

// Don`t write any code here that you would expect to run in the browser.
export const getStaticProps = async () => {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  return { props: { ninjas: data } };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja list | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All ninjas</h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninjas;

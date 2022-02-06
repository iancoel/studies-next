import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1)
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Ninja list | 404</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Oops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{' '}
          <Link href="/">
            <a>homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;

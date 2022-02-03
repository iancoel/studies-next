import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas delectus
        sint reiciendis similique ipsum asperiores in distinctio, dolorem eum
        quis natus pariatur voluptate maxime accusamus cupiditate earum est
        repellat doloremque!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas delectus
        sint reiciendis similique ipsum asperiores in distinctio, dolorem eum
        quis natus pariatur voluptate maxime accusamus cupiditate earum est
        repellat doloremque!
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}

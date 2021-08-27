import Head from 'next/head';
import FandQ from '../components/FandQ';
import Hero from '../components/Hero';
import Logoslider from '../components/Logoslider';
import Pricing from '../components/Pricing';
import Team from '../components/Team';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>HelaScript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Hero />

        <Pricing />
        <div class="divider"></div>
        <FandQ />
        <div class="divider"></div>
        <Team />
        <Logoslider />
      </body>
    </div>
  );
}

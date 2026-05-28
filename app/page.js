import Navbar from '@/components/Navbar/Navbar';

import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Brands from '@/components/Brands/Brands';

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <Brands />

        <section
          id="contact"
          style={{
            height: '100vh',
            background: '#050505',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '4rem',
            letterSpacing: '-0.06em',
          }}
        >
          CONTACT
        </section>
      </main>
    </>
  );
}
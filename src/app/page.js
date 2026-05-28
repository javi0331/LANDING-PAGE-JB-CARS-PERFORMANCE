import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#050505',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '5rem',
        fontWeight: '700',
        letterSpacing: '-0.06em',
      }}
    >
      JB CARS
    </main>
  );
}
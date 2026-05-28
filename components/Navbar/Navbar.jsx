'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { NAV_LINKS, BRAND } from '@/lib/constants';
import { openWhatsApp } from '@/lib/whatsappRotator';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeSection, setActiveSection] = useState('');

  /* ── Detectar scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Bloquear scroll cuando el menú móvil está abierto ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* ── Intersection Observer para sección activa ── */
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) =>
      document.querySelector(href)
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    // Smooth scroll manual con offset del navbar
    const target = document.querySelector(href);
    if (target) {
      const offset = 64; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuActive : ''}`}
      role="banner"
    >
      <div className={styles.inner}>

        {/* ── Logo ── */}
        <Link href="/" className={styles.logo} aria-label="JB Cars Performance — Inicio">
          <span className={styles.logoText}>JB</span>
          <span className={styles.logoDivider} aria-hidden="true" />
          <span className={styles.logoSub}>CARS PERFORMANCE</span>
        </Link>

        {/* ── Navegación desktop ── */}
        <nav className={styles.nav} aria-label="Navegación principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  className={`${styles.navLink} ${activeSection === href ? styles.active : ''}`}
                  onClick={() => handleNavClick(href)}
                  aria-current={activeSection === href ? 'page' : undefined}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── CTA WhatsApp ── */}
        <button
          className={styles.ctaBtn}
          onClick={() => openWhatsApp()}
          aria-label="Contactar por WhatsApp"
        >
          <span className={styles.ctaBtnInner}>Contáctanos</span>
        </button>

        {/* ── Hamburger móvil ── */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* ── Menú móvil ── */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menú móvil">
          <ul className={styles.mobileNavList}>
            {NAV_LINKS.map(({ label, href }, i) => (
              <li
                key={href}
                className={styles.mobileNavItem}
                style={{ '--delay': `${i * 60 + 80}ms` }}
              >
                <button
                  className={`${styles.mobileNavLink} ${activeSection === href ? styles.active : ''}`}
                  onClick={() => handleNavClick(href)}
                >
                  <span className={styles.mobileNavNumber}>0{i + 1}</span>
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mobileMenuFooter}>
          <button
            className={styles.mobileCtaBtn}
            onClick={() => { openWhatsApp(); setMenuOpen(false); }}
          >
            Habla con un asesor →
          </button>
        </div>
      </div>
    </header>
  );
}
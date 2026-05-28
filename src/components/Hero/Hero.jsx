'use client';

import { motion } from 'framer-motion';

import styles from './Hero.module.css';

import {
  fadeUp,
  staggerContainer,
  fade,
} from '@/lib/motion';

import { openWhatsApp } from '@/lib/whatsappRotator';

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.noise} />

      <motion.div
        className={styles.overlay}
        variants={fade}
        initial="hidden"
        animate="visible"
      />

      <div className={styles.container}>

        <motion.div
          className={styles.content}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          <motion.span
            variants={fadeUp}
            className={styles.eyebrow}
          >
            JB CARS PERFORMANCE
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className={styles.title}
          >
            Rendimiento
            <br />
            sin compromisos.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={styles.description}
          >
            Ingeniería automotriz de alto nivel.
            Potencia, estética y precisión
            en cada detalle.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className={styles.actions}
          >
            <button
              className={styles.primaryBtn}
              onClick={() => openWhatsApp()}
            >
              Contactar
            </button>

            <button
              className={styles.secondaryBtn}
            >
              Explorar
            </button>
          </motion.div>

        </motion.div>
      </div>

      <div className={styles.gridGlow} />
      <div className={styles.scrollIndicator}>
  <span className={styles.scrollText}>
    Scroll
  </span>

  <div className={styles.scrollLine} />
</div>

    </section>
  );
}
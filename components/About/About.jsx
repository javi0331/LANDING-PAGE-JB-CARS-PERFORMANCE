'use client';

import { motion } from 'framer-motion';

import Section from '@/components/ui/Section/Section';

import styles from './About.module.css';

import {
  fadeUp,
  staggerContainer,
} from '@/lib/motion';

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Nosotros"
      title="Ingeniería automotriz con obsesión por el detalle."
      description="
      Cada vehículo representa una visión.
      Nuestro trabajo consiste en llevarla al máximo nivel."
    >
      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <motion.div
          className={styles.card}
          variants={fadeUp}
        >
          <span className={styles.number}>
            01
          </span>

          <h3>
            Precisión
          </h3>

          <p>
            Cada modificación se ejecuta
            con estándares de ingeniería
            y performance profesional.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={fadeUp}
        >
          <span className={styles.number}>
            02
          </span>

          <h3>
            Estética
          </h3>

          <p>
            Diseño agresivo,
            sofisticado y funcional.
            Todo tiene intención.
          </p>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={fadeUp}
        >
          <span className={styles.number}>
            03
          </span>

          <h3>
            Performance
          </h3>

          <p>
            Potencia real.
            Sensaciones reales.
            Rendimiento sin límites.
          </p>
        </motion.div>

      </motion.div>
    </Section>
  );
}
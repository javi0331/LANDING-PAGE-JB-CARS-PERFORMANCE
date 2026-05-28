'use client';

import { motion } from 'framer-motion';

import styles from './Services.module.css';

import {
  fadeUp,
  staggerContainer,
} from '@/lib/motion';

const services = [
  'Performance',
  'Suspensión',
  'Estética',
  'Reprogramación',
];

export default function Services() {
  return (
    <section
      id="services"
      className={styles.services}
    >
      <motion.div
        className={styles.grid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service) => (
          <motion.div
            key={service}
            className={styles.card}
            variants={fadeUp}
          >
            <h3>{service}</h3>

            <p>
              Experiencia premium enfocada en
              precisión y rendimiento.
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
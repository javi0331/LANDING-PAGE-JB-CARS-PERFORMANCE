'use client';

import { motion } from 'framer-motion';
import styles from './Section.module.css';
import { fadeUp } from '@/lib/motion';

export default function Section({
  eyebrow,
  title,
  description,
  children,
  id,
}) {
  return (
    <section
      id={id}
      className={styles.section}
    >
      <div className={styles.container}>

        {(eyebrow || title || description) && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={styles.heading}
          >
            {eyebrow && (
              <span className={styles.eyebrow}>
                {eyebrow}
              </span>
            )}

            {title && (
              <h2 className={styles.title}>
                {title}
              </h2>
            )}

            {description && (
              <p className={styles.description}>
                {description}
              </p>
            )}
          </motion.div>
        )}

        {children}
      </div>
    </section>
  );
}
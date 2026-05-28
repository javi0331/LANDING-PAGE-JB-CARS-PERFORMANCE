'use client';

import { useState } from 'react';

import {
  motion,
  AnimatePresence,
} from 'framer-motion';

import styles from './Brands.module.css';

const brands = [
  {
    name: 'K&N',

    logo: '/images/kyn.png',

    description:
      'Referente en filtros de aire de alto flujo y sistemas de admisión performance. Muy popular en preparación deportiva por mejorar respiración y respuesta del motor.',
  },
  {
    name: 'WOLF OIL´S',

    logo: '/images/wolf.webp',

    description:
      'Fabricante europeo de aceites y fluidos premium para motores de calle y competición. Enfocada en protección extrema, eficiencia y desempeño bajo altas exigencias.',
  },
  {
    name: 'LIQUIMOLY',

    logo: '/images/liquimoly.png',

    description:
      'Reconocida mundialmente por aceites, aditivos y tratamientos para motor. Muy utilizada en tuning y performance por mejorar lubricación, limpieza y respuesta mecánica.',
  },
  {
    name: 'NGK',

    logo: '/images/ngk.png',

    description:
      'Especialista en bujías, sensores y componentes de ignición de alto rendimiento. Muy reconocida en motores deportivos y preparación performance por su confiabilidad y precisión térmica.',
  },
  {
    name: 'DENSO',

    logo: '/images/denso.png',

    description:
      'Marca OEM líder en sistemas de encendido, inyección y electrónica automotriz. Destaca por tecnología avanzada y piezas utilizadas en vehículos japoneses y de alto desempeño.',
  },
  {
    name: 'PEAK',

    logo: '/images/peak.webp',

    description:
      'Especializada en refrigerantes, anticongelantes y fluidos de mantenimiento. Destaca por durabilidad y protección térmica en motores de alto trabajo.',
  },
  {
    name: 'TRATAUTO',

    logo: '/images/tratauto.png',

    description:
      'Marca enfocada en mantenimiento y cuidado automotriz, ofreciendo soluciones para limpieza, protección y operación eficiente de vehículos.',
  },
  {
    name: 'ATE',

    logo: '/images/ate.png',

    description:
      'Marca premium de frenos perteneciente a Continental. Destaca en discos, pastillas y fluidos de freno con enfoque en seguridad y performance.',
  },
  {
    name: 'ELRING',

    logo: '/images/elring.png',

    description:
      'Especialista en juntas, empaques y soluciones de sellado OEM. Reconocida por calidad alemana y resistencia en motores de alto desempeño.',
  },
];  

export default function Brands() {
  const [active, setActive] = useState(null);

  return (
    <section className={styles.brands}>
      <div className={styles.header}>
        <p>DISCOVER</p>

        <h2>
          Descubre nuestras marcas.
        </h2>
      </div>

      <div className={styles.scrollWrapper}>
        <div className={styles.grid}>
          {brands.map((brand, index) => {
            const opened = active === index;

            return (
              <motion.div
                key={index}
                className={`${styles.card} ${
                  opened ? styles.expanded : ''
                }`}
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {brand.background && (
  <div className={styles.imageContainer}>
    <img
      src={brand.background}
      alt={brand.name}
      className={styles.image}
    />

    <div className={styles.gradient} />
  </div>
)}

                <div className={styles.overlay}>
                  <div className={styles.top}>
  <h2 className={styles.brandTitle}>
    {brand.name}
  </h2>
                    <button
                      onClick={() =>
                        setActive(
                          opened ? null : index
                        )
                      }
                    >
                      {opened ? '−' : '+'}
                    </button>
                  </div>

                  <div className={styles.logoContainer}>
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className={styles.logo}
                    />
                  </div>

                  <AnimatePresence>
                    {opened && (
                      <motion.div
                        className={styles.content}
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 20,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        <p>
                          {brand.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
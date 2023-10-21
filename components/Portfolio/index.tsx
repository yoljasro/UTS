import React from 'react';
import { MainPageTitle } from '../MainPageTitle';
import styles from './index.module.sass';
import { motion, useViewportScroll } from 'framer-motion';
import Bounce from 'react-reveal/Bounce';

export const Portfolio = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.portfolio}
      id='portfolio'
    >
      <MainPageTitle title='Our portfolio' />
      <Bounce right cascade>
      <motion.div
        className={styles.portfolio__cards}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y: scrollYProgress, display: 'flex', justifyContent: 'center' }}
      >
        <motion.div
          className={styles.portfolio__card}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: '1rem' }}
        ></motion.div>
        <motion.div
          className={styles.portfolio__card}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: '1rem' }}
        >sds</motion.div>
        <motion.div
          className={styles.portfolio__card}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ marginRight: '1rem' }}
        ></motion.div>
        
      </motion.div>
      </Bounce>
    </motion.div>
  );
};
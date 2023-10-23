import React from 'react';
import { MainPageTitle } from '../MainPageTitle';
import styles from './index.module.sass';
import { motion, useViewportScroll } from 'framer-motion';
import Zoom from 'react-reveal/Zoom';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";



export const Portfolio = () => {
  const t = useTranslations();
  const router = useRouter();
  const { scrollYProgress } = useViewportScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.portfolio}
      id='portfolio'
    >
      <MainPageTitle title={t("portfolio.title")} />
      <Zoom cascade>
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
            onClick={() => window.open('https://worldhalal.uz', '_blank')}
          >
            <Image src={'/assets/img/halal.svg'} alt='halal' width={400} height={200} />
            <p>
              <Link className={styles.portfolio__site} href={'https://worldhalal.uz'}>worldhalal.uz</Link>
            </p>
            <p>{t("portfolio.halal")}</p>
          </motion.div>
          <motion.div
            className={styles.portfolio__card}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginRight: '1rem' }}
            onClick={() => window.open('https://chefs.uz', '_blank')}
          >
            <img src={'https://www.chefs.uz/assets/img/noroot.png'} alt='halal' width={200} height={200} />
            <p>
              <Link className={styles.portfolio__site} href={'https://chefs.uz'}>chefs.uz</Link>

            </p>
            <p>{t("portfolio.chefs")}</p>
          </motion.div>
          <motion.div
            className={styles.portfolio__card}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ marginRight: '1rem' }}
            onClick={() => window.open('https://uzbegims.lv', '_blank')}
          >
            <img src={'https://scontent.ftas2-1.fna.fbcdn.net/v/t31.18172-8/10623468_565350160231408_248298186353896492_o.jpg?stp=cp0_dst-jpg_e15_q65_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=947906&_nc_ohc=j9VMXRn5CvMAX9TeisQ&_nc_ht=scontent.ftas2-1.fna&oh=00_AfAW1hy_iLtkIOuMIplb4fk7B3mgL1Kn0FF-Y715TtRugQ&oe=655E04D8'} alt='uzbe' width={250} height={200} />
            <p>
              <Link className={styles.portfolio__site} href={'https://uzbegims.lv'}>uzbegims.lv</Link>
            </p>
            <p>{t("portfolio.uzbegim")}</p>
          </motion.div>

        </motion.div>
      </Zoom>
    </motion.div>
  );
};
import React from 'react'
// components
import { MainPageTitle } from '../MainPageTitle'
import { Btn } from '../Btn'
// styles
import styles from './index.module.sass'
// mui
import { Button } from 'react-scroll'
// FC
import { FC } from 'react'
// next component
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export const Branding: FC<any> = () => {
  const t = useTranslations();

  return (
    <div className={styles.branding} id='branding'>
      <Fade left cascade>
        <div className={styles.branding__info}>
          <MainPageTitle title={t("services.title")} />
          <h3 className={styles.branding__title}>{t("services.website")}</h3>
          <hr className={styles.branding__hr} />
          <p className={styles.branding__desc}>{t("services.info")}</p>
          <Btn/>
        </div>
      </Fade>
      <Fade right cascade>
        <div className={styles.branding__info}>
          <MainPageTitle title={t("    ")} />
          {/* <h3 className={styles.branding__title}>{t("services.website")}</h3>
          <hr className={styles.branding__hr} />
          <p className={styles.branding__desc}>{t("services.info")}</p>
          <p className={styles.branding__btn}>{t("header.button")}</p>
          <hr className={styles.branding__line} /> */}
          <Image className={styles.branding__image} src={'/assets/img/branding.png'} alt='brandingimage' width={700} height={400}/>
        </div>
      </Fade>
        </div>
        )
}
